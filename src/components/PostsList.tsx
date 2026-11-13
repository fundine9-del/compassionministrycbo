"use client";

import { useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, type CachedPost } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import PostSection from "@/components/PostSection";

export default function PostsList() {
  const posts = useLiveQuery(
    () => db.posts.filter((p) => p.published).reverse().sortBy("created_at"),
    []
  );

  // Sync from Supabase into Dexie on mount
  useEffect(() => {
    let cancelled = false;
    async function sync() {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("id, title, body, image_urls, published, created_at")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (error || cancelled) return;
        if (data) {
          await db.posts.bulkPut(
            data.map((p: CachedPost) => ({
              id: p.id,
              title: p.title,
              body: p.body,
              image_urls: p.image_urls,
              published: p.published,
              created_at: p.created_at,
            }))
          );
          // Remove posts no longer published
          const ids = new Set(data.map((p: CachedPost) => p.id));
          const cached = await db.posts.toArray();
          const toDelete = cached
            .filter((c) => !ids.has(c.id))
            .map((c) => c.id);
          if (toDelete.length) await db.posts.bulkDelete(toDelete);
        }
      } catch (e) {
        console.error("Sync failed:", e);
      }
    }
    sync();
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts === undefined) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-[#464847]">
        <p>Loading content...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-[#464847]">
        <p>No content has been published yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <PostSection key={post.id} post={post} />
      ))}
    </>
  );
}

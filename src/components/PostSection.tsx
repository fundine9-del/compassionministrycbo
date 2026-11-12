"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Post = {
  id: string;
  title: string | null;
  body: string;
  image_urls: string[] | null;
};

export default function PostSection({ post }: { post: Post }) {
  const images = post.image_urls ?? [];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Auto-scroll marquee (smooth, not rapid) when there are multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const el = scrollerRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const slideWidth = el.clientWidth;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + slideWidth;
      if (next >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: next, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  // Track active dot from scroll position
  useEffect(() => {
    if (images.length <= 1) return;
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
      setActive(Math.min(Math.max(idx, 0), images.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [images.length]);

  function goTo(i: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {post.title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9a3f2c]">
          {post.title}
        </h2>
      )}
      <p className="text-lg leading-relaxed text-white whitespace-pre-line mb-6">
        {post.body}
      </p>

      {images.length === 1 && (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow">
          <Image
            src={images[0]}
            alt={post.title ?? "Compassion Ministry CBO"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            unoptimized
          />
        </div>
      )}

      {images.length > 1 && (
        <div>
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-xl shadow [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-full aspect-[4/3] relative"
              >
                <Image
                  src={url}
                  alt={post.title ?? "Compassion Ministry CBO"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Dots indicating multiple images */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#9a3f2c]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

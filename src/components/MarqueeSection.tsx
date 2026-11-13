"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type MarqueItem = {
  id: string;
  image_url: string;
  caption: string | null;
};

export default function MarqueeSection() {
  const [items, setItems] = useState<MarqueItem[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const { data, error } = await supabase
          .from("marque")
          .select("id, image_url, caption")
          .eq("published", true)
          .order("sort_order", { ascending: true });
        if (!error && data && !cancelled) setItems(data as MarqueItem[]);
      } catch (e) {
        console.error("Marquee load failed:", e);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  function goTo(i: number) {
    setActive(i);
  }

  if (items.length === 0) return null;

  return (
    <section className="overflow-hidden bg-[#010101] px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto h-72 max-w-[1800px] md:h-96"
        role="region"
        aria-label="Featured images"
        aria-roledescription="carousel"
      >
        {items.map((item, i) => {
          const position = (i - active + items.length) % items.length;
          const isCurrent = position === 0;
          const isNext = position === 1 && items.length > 1;
          const isVisible = isCurrent || isNext;

          return (
            <div
              key={item.id}
              className={`absolute inset-y-0 w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-opacity duration-700 motion-reduce:transition-none ${
                isNext
                  ? "left-0 md:left-auto md:right-0 md:w-[calc(50%-0.5rem)]"
                  : "left-0 md:w-[calc(50%-0.5rem)]"
              } ${
                isVisible
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              } ${isNext ? "hidden md:block" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              aria-hidden={!isVisible}
            >
              <Image
                src={item.image_url}
                alt={item.caption ?? "Compassion Ministry CBO"}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 50vw"
                unoptimized
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-center text-sm text-white">
                  {item.caption}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {items.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-[#f4a259]"
                  : "w-2.5 bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

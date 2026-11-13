import PostsList from "@/components/PostsList";
import MarqueeSection from "@/components/MarqueeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative w-full overflow-hidden bg-[#0b0b0c]">
        <div className="relative mx-auto max-w-[1800px]">
          <div className="relative h-[650px] md:h-[760px]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.55] contrast-125 sepia-[0.12]"
              style={{
                backgroundImage: "url('/cbo baner_converted.webp')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,14,0.88)_0%,rgba(14,18,20,0.76)_38%,rgba(14,18,20,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%)]" />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 pb-16 pt-10 md:px-8 lg:px-12">
              <div className="max-w-[700px] pt-20 md:pt-24">
                <div className="mb-6 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#f4a259] md:text-xs">
                  <span className="h-px w-9 bg-[#f4a259]" />
                  Our mission
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl lg:text-[7.25rem]">
                  COMPASSION
                  <span className="block">IN ACTION.</span>
                </h1>

                <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-white/75 md:text-2xl">
                  We inform, inspire, educate and serve families by creating lasting solutions to end hunger, poverty and social injustice.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-xl border border-[#f4a259] bg-[#f4a259] px-7 py-4 text-base font-bold uppercase text-[#1c1f20] shadow-[0_0_0_2px_rgba(244,162,89,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f7b56f]"
                  >
                    Support our mission
                  </a>
                  <a
                    href="tel:0724727715"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold uppercase text-white transition hover:bg-white/10"
                  >
                    Call us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeSection />

      <section className="py-8">
        <PostsList />
      </section>

      {/* Location map */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#9a3f2c] mb-4 text-center">
          Our Location
        </h2>
        <div className="w-full overflow-hidden rounded-xl shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.5042157196!2d36.77981595650192!3d-1.3189338952592993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bcfe08eaf57%3A0xa6a8344e0cf16726!2sHope%20Academy%20(Tumaini%20Hope%20Center)!5e1!3m2!1sen!2ske!4v1794521279387!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-[#464847]">
        <p>&copy; {new Date().getFullYear()} Compassion Ministry CBO. All rights reserved.</p>
        <p className="mt-1">
          Email: compassionministry47@gmail.com | Phone: 0724727715
        </p>
      </footer>
    </main>
  );
}

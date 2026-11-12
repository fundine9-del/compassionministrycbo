import Image from "next/image";

export const metadata = {
  title: "About — Compassion Ministry CBO",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#010101]">
      <section className="relative w-full overflow-hidden bg-[#0b0b0c]">
        <div className="relative mx-auto max-w-[1800px]">
          <div className="relative h-[420px] md:h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.55] contrast-125 sepia-[0.12]"
              style={{
                backgroundImage: "url('/ab_converted.webp')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,14,0.88)_0%,rgba(14,18,20,0.76)_38%,rgba(14,18,20,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 pb-16 pt-10 md:px-8 lg:px-12">
              <div className="max-w-[700px] pt-20 md:pt-24">
                <div className="mb-6 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#f4a259] md:text-xs">
                  <span className="h-px w-9 bg-[#f4a259]" />
                  Who we are
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
                  ABOUT
                  <span className="block">US.</span>
                </h1>

                <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-white/75 md:text-xl">
                  Compassion Ministry CBO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#9a3f2c] mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed text-[#010101]">
            Informs, inspires, educates and serves poorest families by creating
            lasting solution to end hunger, poverty and social injustices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#9a3f2c] mb-3">Who We Are</h2>
          <p className="text-lg leading-relaxed text-[#010101]">
            Compassion Ministry CBO is a community-based organization dedicated to
            walking alongside the poorest families in our communities. We believe
            that every family deserves dignity, food on the table, and a fair
            chance at a better life. Through information, inspiration, education
            and direct service, we work to break the cycles of hunger, poverty
            and social injustice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#9a3f2c] mb-3">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#010101]">
            <li>Provide food support and hunger relief to vulnerable families.</li>
            <li>Educate communities on sustainable livelihoods and self-reliance.</li>
            <li>Advocate against social injustices affecting the poorest.</li>
            <li>Inspire hope through mentorship, outreach and community care.</li>
            <li>Create lasting solutions through partnerships and local initiatives.</li>
          </ul>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow">
          <Image
            src="/cbo baner_converted.webp"
            alt="Compassion Ministry CBO"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>
      </section>
    </main>
  );
}

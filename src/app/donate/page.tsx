export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white text-[#010101]">
      <section className="relative w-full overflow-hidden bg-[#0b0b0c]">
        <div className="relative mx-auto max-w-[1800px]">
          <div className="relative h-[420px] md:h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.55] contrast-125 sepia-[0.12]"
              style={{
                backgroundImage: "url('/do_converted.webp')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,14,0.88)_0%,rgba(14,18,20,0.76)_38%,rgba(14,18,20,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 pb-16 pt-10 md:px-8 lg:px-12">
              <div className="max-w-[700px] pt-20 md:pt-24">
                <div className="mb-6 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#f4a259] md:text-xs">
                  <span className="h-px w-9 bg-[#f4a259]" />
                  Support our work
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
                  DONATE
                  <span className="block">TODAY.</span>
                </h1>

                <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-white/75 md:text-xl">
                  Your generosity helps us end hunger, poverty and social injustices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#9a3f2c] mb-3">Why Donate</h2>
          <p className="text-lg leading-relaxed text-[#010101]">
            Compassion Ministry CBO serves the poorest families in our
            communities. Every contribution — big or small — goes directly
            toward food relief, education, and creating lasting solutions that
            lift families out of poverty and injustice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#fffce6] rounded-xl p-6 border border-[#af9e73]">
            <h3 className="text-xl font-bold text-[#9a3f2c] mb-2">M-Pesa</h3>
            <p className="text-[#010101]">Paybill / Till Number: <span className="font-semibold">881172</span></p>
            <p className="text-[#010101]">Account Name: Compassion Ministry CBO</p>
          </div>
          <div className="bg-[#fffce6] rounded-xl p-6 border border-[#af9e73]">
            <h3 className="text-xl font-bold text-[#9a3f2c] mb-2">Send Money</h3>
            <p className="text-[#010101]">Send money to:</p>
            <p className="text-[#010101] font-semibold">0724727715</p>
            <p className="text-[#010101]">Compassion Ministry CBO</p>
          </div>
        </div>

        <div className="bg-[#fbe0d5] rounded-xl p-6 border border-[#af9e73]">
          <h3 className="text-xl font-bold text-[#9a3f2c] mb-2">Other Ways to Help</h3>
          <p className="text-[#010101]">
            You can also donate in kind, volunteer your time, or partner with us.
            Contact us at{" "}
            <a
              href="mailto:compassionministry47@gmail.com"
              className="text-[#9a3f2c] hover:underline"
            >
              compassionministry47@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:0724727715" className="text-[#9a3f2c] hover:underline">
              0724727715
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

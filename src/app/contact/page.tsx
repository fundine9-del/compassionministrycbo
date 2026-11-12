export default function ContactPage() {
  const phone = "0724727715";
  const email = "compassionministry47@gmail.com";
  const whatsappUrl = "https://wa.me/254724727715";

  const items = [
    {
      label: "WhatsApp",
      href: whatsappUrl,
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      label: "Call",
      href: `tel:${phone}`,
      color: "#9a3f2c",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      color: "#af9e73",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#010101]">
      <section className="relative w-full overflow-hidden bg-[#0b0b0c]">
        <div className="relative mx-auto max-w-[1800px]">
          <div className="relative h-[420px] md:h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.55] contrast-125 sepia-[0.12]"
              style={{
                backgroundImage: "url('/com_converted.webp')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,14,0.88)_0%,rgba(14,18,20,0.76)_38%,rgba(14,18,20,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 pb-16 pt-10 md:px-8 lg:px-12">
              <div className="max-w-[700px] pt-20 md:pt-24">
                <div className="mb-6 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#f4a259] md:text-xs">
                  <span className="h-px w-9 bg-[#f4a259]" />
                  Get in touch
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
                  CONTACT
                  <span className="block">US.</span>
                </h1>

                <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-white/75 md:text-xl">
                  Tap any option below to reach us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#af9e73] bg-[#fffce6] p-8 shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              <span className="text-lg font-semibold text-[#010101]">
                {item.label}
              </span>
              <span className="text-sm text-[#464847] text-center break-all">
                {item.label === "WhatsApp" || item.label === "Call"
                  ? phone
                  : email}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center text-[#464847]">
          <p>Compassion Ministry CBO</p>
          <p className="mt-1 text-sm">
            Email: {email} | Phone: {phone}
          </p>
        </div>
      </section>
    </main>
  );
}

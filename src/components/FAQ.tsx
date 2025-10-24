export default function FAQ() {
  const faqs = [
    { q: "Is this free?", a: "Yes, practice is free. No account required." },
    { q: "Do I need to know German already?", a: "Not necessarily. Start at A1 and move up to C2." },
    { q: "Is there a full desktop web app?", a: "Yes—click Start practicing to open the app with all levels and drills." }
  ];
  return (
    <section id="faq" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">FAQ</h2>
        <dl className="mt-6 grid sm:grid-cols-2 gap-6">
          {faqs.map(f => (
            <div key={f.q} className="rounded-xl border border-white/10 p-5">
              <dt className="font-semibold">{f.q}</dt>
              <dd className="text-brand-fg mt-2">{f.a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <a
            href="https://practice.lingodrill.com/"
            className="rounded-2xl bg-brand-accent hover:bg-brand-accent/90 text-[#0b0f14] font-semibold px-6 py-3"
          >
            Start practicing now
          </a>
        </div>
      </div>
    </section>
  );
}

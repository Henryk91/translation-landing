export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Practice German online with <span className="text-brand-accent">free translation</span> & grammar drills
            </h1>
            <p className="mt-4 text-brand-fg max-w-prose">
              Built for English speakers learning German. Translate real sentences, master
              definite/indefinite articles, declension, conjugation, and more—sorted by CEFR level (A1–C2).
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://practice.lingodrill.com/"
                className="rounded-2xl bg-brand-accent hover:bg-brand-accent/90 text-[#0b0f14] font-semibold px-6 py-3"
              >
                Start practicing
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-white/10 px-6 py-3 text-brand-fg hover:text-brand-text"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-xs text-brand-fg/80">
              Keywords: practice German online, German translation exercises, German grammar drills, A1–C2 German.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <img src="/translation-practice/hero-preview.png" alt="App preview" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

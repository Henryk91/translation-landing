export default function Levels() {
  const levels = ["A1.1", "A1.2", "A2.1", "A2.2", "B1.1", "B1.2", "B2", "C1", "C2"];
  return (
    <section id="levels" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Practice by level (A1–C2)</h2>
        <p className="text-brand-fg mt-2 max-w-prose">
          Start at your level and progress naturally. Each unit contains translation tasks, grammar focus, and
          auto-checked answers with explanations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {levels.map(l => (
            <span key={l} className="rounded-xl border border-white/10 px-4 py-2 text-sm">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

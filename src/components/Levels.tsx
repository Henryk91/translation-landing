export default function Levels() {
  const levels = [
    { level: "A1.1", path: "By_Level/a1.1" },
    { level: "A1.2", path: "By_Level/a1.2" },
    { level: "A2.1", path: "LingoDrill_A2" },
    { level: "A2.2", path: "LingoDrill_A2" },
    { level: "B1.1", path: "LingoDrill_B1.1" },
    { level: "B1.2", path: "LingoDrill_B1.2" },
    { level: "B1.3", path: "LingoDrill_B1.3" },
    { level: "B2.1", path: "LingoDrill_B2.1" },
    { level: "B2.2", path: "LingoDrill_B2.2" },
    { level: "B2.3", path: "LingoDrill_B2.3" },
    { level: "C1", path: "By_Level/c1" },
    { level: "C2", path: "By_Level/c2" },
  ];
  return (
    <section id="levels" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Practice by level (A1–C2)</h2>
        <p className="text-brand-fg mt-2 max-w-prose">
          Start at your level and progress naturally. Each unit contains translation tasks, grammar focus, and
          auto-checked answers with explanations. Click the level to start practicing NOW!
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {levels.map((l) => (
            <a
              key={l.level}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-brand-accent transition"
              href={`https://practice.lingodrill.com/${l.path}`}
              target="_blank"
            >
              {l.level}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

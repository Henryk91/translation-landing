export default function Features() {
  const items = [
    { title: "English → German translation", desc: "Type full translations or fill only the missing parts (Gap Fill)." },
    { title: "Articles & declension", desc: "Drill der/die/das, den/dem/des, and preposition + case patterns." },
    { title: "Conjugation & passive", desc: "Present, Präteritum, Perfekt, Konjunktiv II, passive with modal verbs." },
    { title: "By Level (A1–C2)", desc: "Exercises grouped by CEFR levels; progress indicators per section." },
    { title: "Error retry", desc: "Revisit only the sentences you got wrong to reinforce learning." },
    { title: "No sign-up", desc: "Jump straight into practice—free and fast." }
  ];

  return (
    <section id="features" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to practice German effectively</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 p-5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-brand-fg mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

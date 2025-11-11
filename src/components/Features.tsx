export default function Features() {
  const items = [
    { title: "English → German translation", desc: "Type full translations or fill only the missing parts (Gap Fill).", path: "Own_Sentences" },
    { title: "Articles & declension", desc: "Drill der/die/das, den/dem/des, and preposition + case patterns.", path: "Artikeln"},
    { title: "Conjugation & passive", desc: "Present, Präteritum, Perfekt, Konjunktiv II, passive with modal verbs." , path: "Konjugation_Drills"},
    { title: "By Level (A1–C2)", desc: "Exercises grouped by CEFR levels; progress indicators per section." , path: "By_Level"},
    { title: "Error retry", desc: "Revisit only the sentences you got wrong to reinforce learning." , path: ""},
    { title: "No sign-up", desc: "Jump straight into practice—free and fast." , path: ""}
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
              <a href={`https://practice.lingodrill.com/${f.path}`} target="_blank" className="mt-4 inline-block text-sm text-brand-accent hover:underline">Learn Now &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

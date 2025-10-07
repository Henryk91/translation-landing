export default function Topics() {
  const topics = [
    "Definite/indefinite articles",
    "Cases & prepositions (Akk/Dat/Gen)",
    "Verb conjugation & tenses",
    "Passive voice + modal verbs",
    "Questions (Fragen)",
    "Adjective endings",
    "Pronunciation drills (ich/ach, st/sp)"
  ];
  return (
    <section id="topics" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Popular topics</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map(t => (
            <li key={t} className="rounded-xl border border-white/10 p-4">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

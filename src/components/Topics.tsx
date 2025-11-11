export default function Topics() {
  const topics = [
    {title: "Definite/indefinite articles", path: "Artikeln"},
    {title: "Cases & prepositions (Akk/Dat/Gen)", path: "Deklination_Drills"},
    {title: "Verb conjugation & tenses",path: "Konjugation_Drills"},
    {title: "Passive voice + modal verbs",path: "Passiv_%2B_Modalverben"},
    {title: "Questions (Fragen)",path: "Fragen"},
    {title: "Adjective endings",path: "LingoDrill_A2/Adjektiv-endungen"},
    {title: "Pronunciation drills (ich/ach, st/sp)",path: "Pronunciation_Drills"},
  ];
  return (
    <section id="topics" className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Popular topics</h2>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t) => (
            <li key={t.title} className="rounded-xl border border-white/10 p-4 flex justify-between items-center">
              {t.title} {" "}
              <a
                href={`https://practice.lingodrill.com/${t.path}`}
                target="_blank"
                className="text-sm text-brand-accent hover:underline"> Learn Now &rarr;</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

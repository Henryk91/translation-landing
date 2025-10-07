export default function Testimonials() {
  const items = [
    { name: "Maya, UK", text: "Exactly what I needed—fast translation drills and clear corrections." },
    { name: "Alex, US", text: "The article and case practice finally made it click for me." },
    { name: "Priya, IN", text: "Love the By Level structure—easy to find the right difficulty." }
  ];
  return (
    <section className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Learners around the world</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map(t => (
            <figure key={t.name} className="rounded-xl border border-white/10 p-5">
              <blockquote className="text-brand-fg">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

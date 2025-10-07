export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-brand-bg/80 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://henryk.co.za/translation-practice/logo192.png" alt="Henryk Logo" className="h-7 w-7" />
          <span className="text-sm text-brand-fg">Translation Practice</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-brand-fg">
          <a href="#features" className="hover:text-brand-text">Features</a>
          <a href="#levels" className="hover:text-brand-text">Levels</a>
          <a href="#topics" className="hover:text-brand-text">Topics</a>
          <a href="#faq" className="hover:text-brand-text">FAQ</a>
        </nav>
        <a
          href="https://henryk.co.za/translation-practice/"
          className="rounded-xl bg-brand-accent/90 hover:bg-brand-accent text-[#0b0f14] font-semibold px-4 py-2 text-sm"
        >
          Start practicing
        </a>
      </div>
    </header>
  );
}

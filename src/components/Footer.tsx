export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-brand-fg text-sm">© {new Date().getFullYear()} Henryk — Translation Practice</p>
        <div className="text-xs text-brand-fg/80">
          <a href="/translation-practice/sitemap.xml" className="hover:text-brand-text">Sitemap</a>
          
          <span className="mx-2">•</span>
          <a href="/translation-practice/robots.txt" className="hover:text-brand-text">Robots</a>
        </div>
      </div>
    </footer>
  );
}

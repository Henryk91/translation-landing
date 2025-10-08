import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Levels from "./components/Levels";
import Topics from "./components/Topics";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { logUse } from "./utils";

export default function App() {
  // Inject FAQ JSON-LD for rich results
  useEffect(() => {

    logUse();
    const el = document.getElementById("faq-json");
    if (!el) return;
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this site free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can practice German translation and grammar for free. No sign-up required."
          }
        },
        {
          "@type": "Question",
          "name": "Is it suitable for beginners and advanced learners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Exercises are grouped by CEFR levels (A1–C2), from basic articles to advanced grammar drills."
          }
        },
        {
          "@type": "Question",
          "name": "Can I practice specific topics like articles or declension?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can drill definite/indefinite articles, cases, conjugation, prepositions, passive voice, and more."
          }
        }
      ]
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Levels />
        <Topics />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

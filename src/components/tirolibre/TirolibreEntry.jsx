import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const TirolibreEntry = () => {
  const { language } = useLanguage();

  const content = {
    it: {
      heroTitle: "#Web3Football",
      heroSubtitle: "crea il tuo network calcistico e lavora nel futuro del calcio.",
      heroDescription:
        "Non solo calciatore. Con Tirolibre costruisci la tua #community personale, #visibile, #attiva, #monetizzabile.",
      heroCTA: "#IniziaOra",
      sectionTitle: "#PerCalciatori",
      features: [
        {
          title: "📹 Profilo pro completo",
          text: "Inserisci video, esperienze, link Transfermarkt e crea un CV digitale potente.",
          tag: "#DigitalCV",
          tagClass: "bg-yellow-100 text-yellow-700",
        },
        {
          title: "📤 Proposto a +300 club in Europa",
          text: "Tirolibre invia il tuo profilo in pochi secondi con un algoritmo intelligente.",
          tag: "#SmartMatching",
          tagClass: "bg-blue-100 text-blue-800",
        },
        {
          title: "🤝 Ricevi e gestisci offerte",
          text: "Offerte tracciate, notifiche smart, firma digitale.",
          tag: "#SecureTransfer",
          tagClass: "bg-green-100 text-green-800",
        },
        {
          title: "🔗 Crea il tuo network personale",
          text: "Ogni utente che ti segue può diventare un contatto strategico post-carriera.",
          tag: "#FutureProof",
          tagClass: "bg-pink-100 text-pink-700",
        },
      ],
      finalTitle: "#BeVisible — Fallo sapere a tutta Europa",
      finalText:
        "Con Tirolibre non sei un profilo tra mille, sei una proposta visibile, tracciabile e potenzialmente virale.",
      finalCTA: "#ScopriCome",
    },
    en: {
      heroTitle: "#Web3Football",
      heroSubtitle: "build your football network and work in the future of the game.",
      heroDescription:
        "Not just a player. With Tirolibre, create your own #community that is #visible, #active, #monetizable.",
      heroCTA: "#StartNow",
      sectionTitle: "#ForPlayers",
      features: [
        {
          title: "📹 Full pro profile",
          text: "Add videos, experience, Transfermarkt link and create a powerful digital CV.",
          tag: "#DigitalCV",
          tagClass: "bg-yellow-100 text-yellow-700",
        },
        {
          title: "📤 Proposed to 300+ clubs",
          text: "Your profile is sent in seconds with a smart algorithm.",
          tag: "#SmartMatching",
          tagClass: "bg-blue-100 text-blue-800",
        },
        {
          title: "🤝 Receive and manage offers",
          text: "Tracked offers, smart notifications, digital signature.",
          tag: "#SecureTransfer",
          tagClass: "bg-green-100 text-green-800",
        },
        {
          title: "🔗 Build your own network",
          text: "Every follower can become a key contact post-career.",
          tag: "#FutureProof",
          tagClass: "bg-pink-100 text-pink-700",
        },
      ],
      finalTitle: "#BeVisible — Let the whole Europe know",
      finalText:
        "With Tirolibre you are not just another profile, but a visible, trackable, potentially viral proposal.",
      finalCTA: "#LearnMore",
    },
  };

  const t = content[language];

  return (
    <div className="bg-white text-gray-800 font-inter">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Tirolibre</div>
          <nav className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="/login" className="text-sm hover:underline">Login</a>
            <a href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded">
              Sign up
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t.heroTitle}<br />{t.heroSubtitle}</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mb-6">
          {t.heroDescription.split("#").map((chunk, i) =>
            i === 0 ? chunk : <span key={i} className="inline-block px-2 py-1 bg-gray-100 rounded-full font-semibold text-sm ml-1">#{chunk.trim()}</span>
          )}
        </p>
        <a href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-md">
          {t.heroCTA}
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">{t.sectionTitle}</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {t.features.map((f, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">
                {f.text}{" "}
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${f.tagClass}`}>
                  {f.tag}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-16 text-center px-4">
        <h2 className="text-2xl font-extrabold mb-4">{t.finalTitle}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">{t.finalText}</p>
        <a href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
          {t.finalCTA}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="font-bold text-lg mb-2">Tirolibre</h4>
            <p>La prima piattaforma calcistica in ottica Web 3.0.</p>
            <p className="text-xs mt-4">© 2025 Tirolibre. Tutti i diritti riservati.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Link utili</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Come funziona</a></li>
              <li><a href="#" className="hover:underline">Per i Club</a></li>
              <li><a href="#" className="hover:underline">Per gli Agenti</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Community</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">TikTok</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Legal</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Termini d’uso</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TirolibreEntry;

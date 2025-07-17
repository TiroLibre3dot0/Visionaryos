import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      {["it", "en", "es"].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-2 py-1 rounded-full text-sm ${
            language === lang
              ? "bg-white text-black"
              : "bg-zinc-700 text-white"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

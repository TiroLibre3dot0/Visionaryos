import { useEffect } from "react";

const AnchorNavigation = ({ onSelect }) => {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      onSelect(hash); // seleziona la sezione
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // attende il rendering
      }
    }
  }, [onSelect]);

  return null;
};

export default AnchorNavigation;

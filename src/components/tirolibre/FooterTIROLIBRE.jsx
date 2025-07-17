// src/components/tirolibre/FooterTIROLIBRE.jsx
import React from "react";

const FooterTIROLIBRE = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 px-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
        <p>© {new Date().getFullYear()} Tirolibre. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterTIROLIBRE;

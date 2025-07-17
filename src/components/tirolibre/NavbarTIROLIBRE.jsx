// src/components/tirolibre/NavbarTIROLIBRE.jsx
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarTIROLIBRE = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 text-white shadow-md">
      <div className="text-xl font-bold tracking-wide">
        ⚽ TIROLIBRE <span className="text-violet-500">3.0</span>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#how-it-works" className="hover:text-violet-400">How it works</a>
        <a href="#features" className="hover:text-violet-400">Features</a>
        <a href="#benefits" className="hover:text-violet-400">Benefits</a>
        <a href="#ai" className="hover:text-violet-400">AI Support</a>
      </nav>

      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <button className="bg-zinc-700 hover:bg-violet-600 text-white px-4 py-2 rounded-full text-sm">
          Login
        </button>
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default NavbarTIROLIBRE;

import Image from "next/image";
import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full flex bg-aliagreen fixed">
      <div id="header" className="flex justify-between items-center p-4">
        <Image src="/logo.png" alt="logo" width="100" height="100" />
        {/* Hamburger menu, shown on medium and smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Icône du menu (à remplacer avec votre icône de choix) */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Full navigation menu, hidden on medium and smaller screens */}
        <nav className="hidden md:block w-full text-white ">
          <ul className="flex ">
            <li className="p-2">
              <a href="/">Accueil</a>
            </li>
            <li className="p-2">
              <a href="/about">A propos</a>
            </li>
            <li className="p-2">
              <a href="/prestations">Prestations et tarifs</a>
            </li>
            <li className="p-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

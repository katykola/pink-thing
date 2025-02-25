'use client';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WrapperSection from "./wrapper-sectionX";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : ""; // Optional chaining just in case
  };

  return (
    <header>
      <WrapperSection>
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link href="/">
            <p className="logo text-2xl font-bold">pink thing</p>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${isOpen ? "block" : "hidden"} absolute md:block md:static top-0 left-0 w-full md:w-auto p-4 md:p-0 z-50 md:z-auto h-screen md:h-auto bg-primaryDark md:bg-transparent`}>
          <div className="flex flex-col md:block h-full md:h-auto">
            <div className="flex justify-end">
              <button
                className="md:hidden text-4xl font-light"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                x
              </button>
            </div>
            <ul className=" flex-1 flex flex-col items-center justify-start mt-12 md:mt-0 md:flex-row gap-12 md:gap-6">
            <li className={`menu-item ${isActive("/")}`}>
            <Link href="/">Home</Link>
                </li>
                <li className={`menu-item ${isActive("/sluzby")}`}>
                  <Link href="/sluzby">Služby</Link>
                </li>
                <li className={`menu-item ${isActive("/reference")}`}>
                  <Link href="/reference">Reference</Link>
                </li>
                <li className={`menu-item ${isActive("/o-nas")}`}>
                  <Link href="/o-nas">O nás</Link>
                </li>

                <Link href="/kontakt">
                  <button className="button button-primary hidden md:block">
                    Kontakt
                  </button>
                </Link>

                <li className="menu-item md:hidden">
                <Link href="/kontakt">Kontakt</Link>
                </li>

                <li>
                  <ThemeToggle />
                </li>

              </ul>
          </div>
          </nav>

        </div>
      </WrapperSection>
    </header>
  );
}

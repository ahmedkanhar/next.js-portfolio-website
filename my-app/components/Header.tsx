// Header.tsx
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 bg-transparent">
      {/* Display the text as logo */}
      <Link href="#" className="relative text-4xl text-white font-semibold">
        Ahmed.
        <span className="absolute inset-0 bg-transparent"></span>
      </Link>

      {/* Navigation Links */}
      <nav className="navbar flex space-x-14  bg-[var(--bg-color)] py-4">
        <Link href="#HomeSection" className="text-[var(--text-color)] text-[1.2rem] mr-8  text-lg text-white font-medium transition-colors duration-300 hover:text-[#00abf0]">
          Home
        </Link>
        <Link href="#AboutSection" className="text-[var(--text-color)] text-[1.2rem] mr-8  text-lg text-white font-medium transition-colors duration-300 hover:text-[#00abf0]">
          About
        </Link>
        <Link href="#EducationSection" className="text-[var(--text-color)] text-[1.2rem] mr-8  text-lg text-white font-medium transition-colors duration-300 hover:text-[#00abf0]">
          Education
        </Link>
        <Link href="#SkillsSection" className="text-[var(--text-color)] text-[1.2rem] mr-8  text-lg text-white font-medium transition-colors duration-300 hover:text-[#00abf0]">
          Skills
        </Link>
        <Link href="#ContactSection" className="text-[var(--text-color)] text-[1.2rem] mr-8  text-lg text-white font-medium transition-colors duration-300 hover:text-[#00abf0]">
          Contact
        </Link>
      </nav>
    </header>
  );
}

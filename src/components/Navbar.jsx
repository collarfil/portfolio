import React from "react";

const Navbar = () => (
  <nav className="fixed w-full top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="font-bold text-xl">Collins.dev</h1>
      <ul className="flex gap-4">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li> {/* ✅ add this */}
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </div>
  </nav>
);

export default Navbar;

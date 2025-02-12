import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">Antoine Dehoux</h1>
        <div className="space-x-4">
          <Link className="text-white" to="/">Accueil</Link>
          <Link className="text-white" to="/skills">Compétences</Link>
          <Link className="text-white" to="/projects">Projets</Link>
          <Link className="text-white" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
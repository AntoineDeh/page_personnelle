import React from "react";

function Home() {
  return (
    <div className="container mx-auto text-center mt-10 p-6">
      <h1 className="text-4xl font-bold text-blue-600">🚀 Antoine DEHOUX - Compétences et Projets 🚀</h1>
      <p className="mt-4 text-lg">👋 Bienvenue sur ma page Compétences et Projets !</p>
      <p className="mt-2 text-gray-700">
        Cette page présente une vue d'ensemble de mes compétences techniques et professionnelles, 
        ainsi qu'une collection de projets réalisés au cours de ma formation 
        en tant qu'ingénieur en génie informatique en développement logiciels et Web.
      </p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">📌 Sommaire</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li><a className="text-blue-500 hover:underline" href="/skills">🛠️ Compétences</a></li>
        <li><a className="text-blue-500 hover:underline" href="/projects">💼 Projets</a></li>
        <li><a className="text-blue-500 hover:underline" href="/contact">📧 Contact</a></li>
      </ul>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">🚀 Je recherche un poste :</h2>
      <p className="mt-2 text-gray-700">
        Je suis à la recherche d'un poste en tant que <strong>Développeur Backend Java et Python</strong>.  
        Je suis motivé à intégrer une équipe technique où je pourrai mettre en pratique mes compétences en
        <strong> ingénierie logicielle et développement backend</strong>.
      </p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">📄 Mon CV</h2>
      <p className="mt-2">
        <a className="text-blue-500 hover:underline" 
           href="https://drive.google.com/file/d/1Cvb-eCCd2MPjg9YHg9l6ktoJM84pNPzi/view?usp=drivesdk"
           target="_blank" rel="noopener noreferrer">Voir mon CV</a>
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🎯 Résultats de tests techniques</h2>
      <p className="mt-2">
        <a className="text-blue-500 hover:underline" 
           href="https://drive.google.com/drive/folders/1K18rY6AEoBNGUbadvDf-cUzOW-zRGW_D?usp=sharing"
           target="_blank" rel="noopener noreferrer">Voir mes tests techniques</a>
      </p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">📧 Contact</h2>
      <p className="mt-2 text-gray-700">Email : antoine.dehoux@reseau.eseo.fr</p>
      <p className="mt-2 text-gray-700">Téléphone : 07 68 54 44 73</p>
    </div>
  );
}

export default Home;

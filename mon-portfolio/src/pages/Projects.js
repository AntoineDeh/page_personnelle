import React from "react";

function Projects() {
  return (
    <div className="container mx-auto text-center mt-10 p-6">
      <h1 className="text-4xl font-bold text-blue-600">💼 Projets</h1>
      <p className="mt-4 text-lg">Découvrez les projets sur lesquels j'ai travaillé, en entreprise et académiques.</p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">✈️ Projet Airbus - Alten</h2>
      <p className="mt-2 text-gray-700">
        Développement d'une fonctionnalité de vote et d'un algorithme de classement pour améliorer 
        la fiabilité des feedbacks des compagnies aériennes.
      </p>
      <p><strong>Technologies :</strong> Java, React, AWS (S3, Lambda), Elasticsearch, Cucumber, Jenkins</p>
      <a className="text-blue-500 hover:underline" href="https://drive.google.com/file/d/1jBYdn8ffqBE4qPEja3jssbTFPoClIOyk/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        📊 Voir la documentation
      </a>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🤖 Projet ExploBot - Thalès</h2>
      <p className="mt-2 text-gray-700">
        Développement d'un système autonome de cartographie robotique avec optimisation des trajectoires.
      </p>
      <p><strong>Technologies :</strong> Python, C++, Qt, Raspberry Pi</p>
      <a className="text-blue-500 hover:underline" href="https://drive.google.com/file/d/1iMMP3T2973p0tTCVWFizippVR7orDbxf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        📹 Voir la démonstration
      </a>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🔐 Projet Supervision de capteurs - RAID</h2>
      <p className="mt-2 text-gray-700">
        Application Android pour surveiller et configurer des capteurs dans un bâtiment sécurisé.
      </p>
      <p><strong>Technologies :</strong> Java, Kotlin, Android Studio</p>
      <a className="text-blue-500 hover:underline" href="https://drive.google.com/file/d/1U9cLyZiWEbWx0KVTBpmd0TaTmrf7VaxU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        📹 Voir la démonstration
      </a>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🌡️ Projet Plateforme de récupération de chaleur - Davidson Consulting</h2>
      <p className="mt-2 text-gray-700">
        Développement d'une plateforme pour récupérer la chaleur fatale des serveurs et chauffer des bâtiments.
      </p>
      <p><strong>Technologies :</strong> C, Java, Android, Raspberry Pi</p>
      <a className="text-blue-500 hover:underline" href="https://drive.google.com/file/d/1iYV8nCvmrNQpkN9YN2Ivhkud4mE9OKs3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        📹 Voir la démonstration
      </a>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🏭 Projet Exotec - Systèmes & Essais</h2>
      <p className="mt-2 text-gray-700">
        Conception mécanique et validation d'un système de convoyage automatisé pour une flotte de robots logistiques.
      </p>
      <p><strong>Technologies :</strong> AutoCAD, Python, Raspberry Pi</p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">🎮 Projets personnels</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• 🕹️ Développement de jeux vidéo en Python (PacMan, Snake, Échecs...)</li>
        <li>• 📱 Find Diagnosis : Diagnostic basé sur GPT-3.5</li>
        <li>• 🔔 Bot de notification pour vérifier les notes sur l'intranet</li>
      </ul>
      <p className="mt-2">
        <a className="text-blue-500 hover:underline" href="https://drive.google.com/drive/folders/1wL_WRprnR27kxL3sJ6IGCh9vApJjLCaJ?hl=fr" target="_blank" rel="noopener noreferrer">
          📂 Voir tous les projets
        </a>
      </p>
    </div>
  );
}

export default Projects;
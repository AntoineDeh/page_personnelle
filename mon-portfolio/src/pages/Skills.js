import React from "react";

function Skills() {
  return (
    <div className="container mx-auto text-center mt-10 p-6">
      <h1 className="text-4xl font-bold text-blue-600">💻 Compétences Techniques</h1>
      <p className="mt-4 text-lg">Découvrez mes compétences en développement logiciel, backend et frontend, DevOps et bien plus.</p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">🛠️ Compétences Métier</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• Aéronautique (Stage Airbus via Alten)</li>
        <li>• Systèmes embarqués (Projet Thalès)</li>
        <li>• Logiciels et données (API, Cloud, Interface)</li>
        <li>• Supervision et Automatisation (Android, projet Davidson Consulting)</li>
        <li>• Ouvert aux autres secteurs : transport, santé, etc.</li>
      </ul>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">💻 Développement Backend (Java, Python)</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• Langages : Java, JEE, Spring Boot, Python</li>
        <li>• Frameworks : Spring Boot, Spring MVC, Spring Security</li>
        <li>• API & Web Services : REST, OpenAPI (Swagger)</li>
        <li>• Bases de données : MySQL, PostgreSQL, MongoDB, Elasticsearch</li>
        <li>• Tests backend : JUnit, Mockito, Cucumber, Pytest</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">🎨 Développement Frontend (React, TypeScript)</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• Langages : JavaScript, TypeScript, React, HTML, CSS</li>
        <li>• Frameworks & Bibliothèques : React, Redux, Next.js</li>
        <li>• Tests frontend : Jest, React Testing Library</li>
        <li>• UI & Design : Material-UI, Tailwind CSS</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">☁️ DevOps & Déploiement</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• Outils CI/CD : GitHub Actions, Jenkins</li>
        <li>• Conteneurisation : Docker</li>
        <li>• Cloud : AWS (S3, Lambda - notions de base)</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">📚 Méthodologies & Bonnes Pratiques</h2>
      <ul className="text-lg mt-4 space-y-2">
        <li>• Méthodes agiles : Scrum, SAFe</li>
        <li>• Développement : TDD, BDD, Clean Code, SOLID</li>
        <li>• Architecture logicielle : MVC, REST</li>
      </ul>
    </div>
  );
}

export default Skills;
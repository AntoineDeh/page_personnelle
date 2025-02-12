import React from "react";

function Contact() {
  return (
    <div className="container mx-auto text-center mt-10 p-6">
      <h1 className="text-4xl font-bold text-blue-600">📧 Contact</h1>
      <p className="mt-4 text-lg">N'hésitez pas à me contacter pour toute opportunité ou collaboration.</p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">📬 Mes coordonnées</h2>
      <p className="mt-2 text-gray-700">📧 Email : antoine.dehoux@reseau.eseo.fr</p>
      <p className="mt-2 text-gray-700">📱 Téléphone : 07 68 54 44 73</p>

      <hr className="my-6 border-gray-300"/>

      <h2 className="text-2xl font-bold text-gray-800">🌐 Liens utiles</h2>
      <p className="mt-2">
        <a className="text-blue-500 hover:underline" href="https://github.com/AntoineDeh" target="_blank" rel="noopener noreferrer">
          🔗 Mon GitHub
        </a>
      </p>
      <p className="mt-2">
        <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/antoine-dehoux/" target="_blank" rel="noopener noreferrer">
          🔗 Mon LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Contact;
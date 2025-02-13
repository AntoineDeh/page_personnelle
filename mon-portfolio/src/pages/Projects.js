import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then(response => response.json())
      .then(data => setProjects(data.projects || []))
      .catch(error => console.error("Erreur lors du chargement des projets :", error));
  }, []);

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12 text-center">
      <h1 className="text-5xl font-extrabold text-blue-600">💼 Mes Projets</h1>
      <p className="mt-4 text-lg text-gray-600">Découvrez mes projets académiques, professionnels et personnels.</p>
      
      <hr className="my-8 border-gray-300" />

      {projects.length === 0 ? (
        <p className="text-gray-500 text-lg">Aucun projet disponible pour le moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              {project.role && <p className="text-gray-700 font-medium">🎯 <strong>Rôle :</strong> {project.role}</p>}
              {project.date && <p className="text-gray-600"><strong>📅 Date :</strong> {project.date}</p>}
              <p className="text-gray-600"><strong>🧑‍💼 Client :</strong> {project.client || "Projet personnel"}</p>

              {project.technologies && project.technologies.length > 0 && (
                <p className="mt-2 text-gray-700"><strong>🛠️ Technologies :</strong> {project.technologies.join(", ")}</p>
              )}
              
              {project.description && <p className="mt-2 text-gray-700">{project.description}</p>}

              {project.objectives && project.objectives.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">🎯 Objectifs :</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {project.objectives.map((objective, i) => (
                      <li key={i}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.key_tasks && project.key_tasks.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">📝 Principales tâches :</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {project.key_tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.methodology && (
                <p className="mt-2 text-gray-700"><strong>📌 Méthodologie :</strong> {project.methodology}</p>
              )}

              {project.organization && project.organization.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">👥 Organisation :</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {project.organization.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.documentation && (
                <p className="mt-4">
                  <a
                    className="text-blue-500 hover:underline font-medium"
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📂 Voir la documentation
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;

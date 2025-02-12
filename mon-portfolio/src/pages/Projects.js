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
    <div className="container mx-auto text-center mt-10 p-6">
      <h1 className="text-4xl font-bold text-blue-600">💼 Projets</h1>
      <p className="mt-4 text-lg">Découvrez les projets sur lesquels j'ai travaillé, en entreprise, académiques et personnels.</p>

      <hr className="my-6 border-gray-300" />

      {projects.length === 0 ? (
        <p className="text-gray-500">Aucun projet disponible.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="mt-6 p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            {project.role && <p className="mt-2 text-gray-700"><strong>Rôle :</strong> {project.role}</p>}
            {project.date && <p className="text-gray-700"><strong>Date :</strong> {project.date}</p>}
            <p className="text-gray-700"><strong>Client :</strong> {project.client || "Projet personnel"}</p>
            {project.technologies && project.technologies.length > 0 && (
              <p className="text-gray-700"><strong>Technologies :</strong> {project.technologies.join(", ")}</p>
            )}
            {project.description && <p className="mt-2 text-gray-700">{project.description}</p>}

            {project.objectives && project.objectives.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Objectifs :</h3>
                <ul className="text-lg mt-2 space-y-2">
                  {project.objectives.map((objective, i) => (
                    <li key={i}>• {objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.key_tasks && project.key_tasks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Principales tâches :</h3>
                <ul className="text-lg mt-2 space-y-2">
                  {project.key_tasks.map((task, i) => (
                    <li key={i}>• {task}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.methodology && (
              <p className="mt-2 text-gray-700"><strong>Méthodologie :</strong> {project.methodology}</p>
            )}

            {project.organization && project.organization.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Organisation :</h3>
                <ul className="text-lg mt-2 space-y-2">
                  {project.organization.map((member, i) => (
                    <li key={i}>• {member}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.documentation && (
              <p className="mt-2">
                <a
                  className="text-blue-500 hover:underline"
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📂 Voir la documentation
                </a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;

import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const result = await getProjects();
      setProjects(result.data || []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      loadProjects();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading projects...</h2>;
  }

  return (
    <div>
      <h2>Projects</h2>

      {error && <p>{error}</p>}

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id || project._id}>
            <h3>{project.title}</h3>
            <p>
              <strong>Description:</strong> {project.description}
            </p>

            {project.techStack && (
              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            )}

            {project.keyFeatures && (
              <p>
                <strong>Key Features:</strong> {project.keyFeatures}
              </p>
            )}

            <button onClick={() => handleDelete(project.id || project._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, updateProject } from "../services/api";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    keyFeatures: "",
    completion: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const result = await getProjectById(id);
        const project = result.data || {};

        setFormData({
          title: project.title || "",
          description: project.description || "",
          techStack: project.techStack || "",
          keyFeatures: project.keyFeatures || "",
          completion: project.completion
            ? project.completion.substring(0, 10)
            : ""
        });

        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProject(id, formData);
      navigate("/projects");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading project...</h2>;
  }

  return (
    <div>
      <h2>Edit Project</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tech Stack</label><br />
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Key Features</label><br />
          <input
            type="text"
            name="keyFeatures"
            value={formData.keyFeatures}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Completion</label><br />
          <input
            type="date"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;
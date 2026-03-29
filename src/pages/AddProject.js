import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../services/api";

function AddProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    keyFeatures: "",
    completion: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProject(formData);
      navigate("/projects");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add Project</h2>

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

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createService } from "../services/api";

function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: ""
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
      await createService(formData);
      navigate("/services");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add Service</h2>

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

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;
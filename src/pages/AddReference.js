import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReference } from "../services/api";

function AddReference() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: ""
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
      await createReference(formData);
      navigate("/references");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add Reference</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label><br />
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name</label><br />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Position</label><br />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Company</label><br />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Reference</button>
      </form>
    </div>
  );
}

export default AddReference;
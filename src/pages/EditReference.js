import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReferenceById, updateReference } from "../services/api";

function EditReference() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReference = async () => {
      try {
        const result = await getReferenceById(id);
        const reference = result.data || {};

        setFormData({
          firstname: reference.firstname || "",
          lastname: reference.lastname || "",
          email: reference.email || "",
          position: reference.position || "",
          company: reference.company || ""
        });

        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadReference();
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
      await updateReference(id, formData);
      navigate("/references");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading reference...</h2>;
  }

  return (
    <div>
      <h2>Edit Reference</h2>

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

        <button type="submit">Update Reference</button>
      </form>
    </div>
  );
}

export default EditReference;
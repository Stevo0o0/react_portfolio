import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceById, updateService } from "../services/api";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const result = await getServiceById(id);
        const service = result.data || {};

        setFormData({
          title: service.title || "",
          description: service.description || ""
        });

        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadService();
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
      await updateService(id, formData);
      navigate("/services");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading service...</h2>;
  }

  return (
    <div>
      <h2>Edit Service</h2>

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

        <button type="submit">Update Service</button>
      </form>
    </div>
  );
}

export default EditService;
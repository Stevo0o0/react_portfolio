import { useEffect, useState } from "react";
import { getReferences, deleteReference } from "../services/api";

function References() {
  const [references, setReferences] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadReferences = async () => {
    try {
      setLoading(true);
      const result = await getReferences();
      setReferences(result.data || []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReferences();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteReference(id);
      loadReferences();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading references...</h2>;
  }

  return (
    <div>
      <h2>References</h2>

      {error && <p>{error}</p>}

      {references.length === 0 ? (
        <p>No references found.</p>
      ) : (
        references.map((reference) => (
          <div key={reference.id || reference._id}>
            <h3>
              {reference.firstname} {reference.lastname}
            </h3>

            {reference.email && (
              <p>
                <strong>Email:</strong> {reference.email}
              </p>
            )}

            {reference.position && (
              <p>
                <strong>Position:</strong> {reference.position}
              </p>
            )}

            {reference.company && (
              <p>
                <strong>Company:</strong> {reference.company}
              </p>
            )}

            <button
              onClick={() => handleDelete(reference.id || reference._id)}
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default References;
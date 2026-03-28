import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const result = await getUsers();
      setUsers(result.data || []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>
      <h2>Users</h2>

      {error && <p>{error}</p>}

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id || user._id}>
            <h3>
              {user.firstname} {user.lastname}
            </h3>

            {user.email && (
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            )}

            <button onClick={() => handleDelete(user.id || user._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;

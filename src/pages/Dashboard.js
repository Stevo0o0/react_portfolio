import { Navigate, Link } from "react-router-dom";
import { isAuthenticated } from "../services/api";

function Dashboard() {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>

      <ul>
        <li><Link to="/projects/add">Add Project</Link></li>
        <li><Link to="/services/add">Add Service</Link></li>
        <li><Link to="/references/add">Add Reference</Link></li>
        <li><Link to="/users">Manage Users</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
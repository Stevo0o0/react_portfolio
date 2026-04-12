import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, removeToken } from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  function handleLogout() {
    removeToken();
    navigate("/signin");
    window.location.reload();
  }

  return (
    <nav>
      <h2>SI</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/references">References</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {!loggedIn && (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}

        {loggedIn && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/projects/add">Add Project</Link></li>
            <li><Link to="/services/add">Add Service</Link></li>
            <li><Link to="/references/add">Add Reference</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li>
              <button type="button" onClick={handleLogout}>
                Sign Out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import Services from "./pages/Services";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import Contact from "./pages/Contact";
import References from "./pages/References";
import AddReference from "./pages/AddReference";
import EditReference from "./pages/EditReference";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/references" element={<References />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/add"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/edit/:id"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/add"
          element={
            <ProtectedRoute>
              <AddService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/edit/:id"
          element={
            <ProtectedRoute>
              <EditService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/references/add"
          element={
            <ProtectedRoute>
              <AddReference />
            </ProtectedRoute>
          }
        />
        <Route
          path="/references/edit/:id"
          element={
            <ProtectedRoute>
              <EditReference />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/add"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
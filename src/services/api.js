const BASE_URL = "https://portfolio-backend-760g.onrender.com/api";

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!getToken();
}

async function request(url, options = {}) {
  const token = getToken();

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    },
    ...options
  });

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    throw new Error(`Expected JSON but received: ${text.substring(0, 100)}`);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

/*
  IMPORTANT:
  Adjust these two auth routes only if your backend uses different paths.
  Examples your backend might use:
  /users/signup and /users/signin
  OR
  /auth/signup and /auth/signin
*/
export const signUpUser = (user) =>
  request(`${BASE_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(user)
  });

export const signInUser = (credentials) =>
  request(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(credentials)
  });

// Projects
export const getProjects = () => request(`${BASE_URL}/projects`);
export const getProjectById = (id) => request(`${BASE_URL}/projects/${id}`);
export const createProject = (project) =>
  request(`${BASE_URL}/projects`, {
    method: "POST",
    body: JSON.stringify(project)
  });
export const updateProject = (id, project) =>
  request(`${BASE_URL}/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(project)
  });
export const deleteProject = (id) =>
  request(`${BASE_URL}/projects/${id}`, {
    method: "DELETE"
  });

// Services
export const getServices = () => request(`${BASE_URL}/services`);
export const getServiceById = (id) => request(`${BASE_URL}/services/${id}`);
export const createService = (service) =>
  request(`${BASE_URL}/services`, {
    method: "POST",
    body: JSON.stringify(service)
  });
export const updateService = (id, service) =>
  request(`${BASE_URL}/services/${id}`, {
    method: "PUT",
    body: JSON.stringify(service)
  });
export const deleteService = (id) =>
  request(`${BASE_URL}/services/${id}`, {
    method: "DELETE"
  });

// References
export const getReferences = () => request(`${BASE_URL}/references`);
export const getReferenceById = (id) => request(`${BASE_URL}/references/${id}`);
export const createReference = (reference) =>
  request(`${BASE_URL}/references`, {
    method: "POST",
    body: JSON.stringify(reference)
  });
export const updateReference = (id, reference) =>
  request(`${BASE_URL}/references/${id}`, {
    method: "PUT",
    body: JSON.stringify(reference)
  });
export const deleteReference = (id) =>
  request(`${BASE_URL}/references/${id}`, {
    method: "DELETE"
  });

// Users
export const getUsers = () => request(`${BASE_URL}/users`);
export const getUserById = (id) => request(`${BASE_URL}/users/${id}`);
export const createUser = (user) =>
  request(`${BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user)
  });
export const updateUser = (id, user) =>
  request(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user)
  });
export const deleteUser = (id) =>
  request(`${BASE_URL}/users/${id}`, {
    method: "DELETE"
  });
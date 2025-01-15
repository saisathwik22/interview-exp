import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Attach token to headers for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);

export const createSubmission = (data) => API.post("/submissions", data);
export const getAllSubmissions = (search) =>
  API.get(`/submissions${search ? `?search=${search}` : ""}`);
export const getUserSubmissions = () => API.get("/submissions/user");

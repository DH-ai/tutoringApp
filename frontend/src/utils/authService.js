import axios from "axios";
const base = import.meta.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: base,
  withCredentials: true, // Send cookies along with requests
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axios.post("/api/token/refresh/", {
          refresh: localStorage.getItem("refresh_token"),
        });
        const { access } = refreshResponse.data;
        localStorage.setItem("access_token", access);
        api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
        return api(originalRequest); // Retry the request with the new token
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        // Clear tokens if refresh fails and redirect to login
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
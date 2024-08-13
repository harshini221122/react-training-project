import api from "../../utils/API";

const registerService = (data) => {
  return api.post("/users/", data);
};

const loginService = (data) => {
  return api.post("/auth", data);
};

export { registerService, loginService };

export const getUserDetails = () => api.get("/auth");

import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});
// api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     return err.response.data.errors[0].msg;
//   }
// );

export default api;

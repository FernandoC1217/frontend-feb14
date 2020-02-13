import axios from "axios";

const api = axios.create({
  baseURL: "https://ieee-backend-utp.herokuapp.com/api/users"
});

export const getAll = () => api.get("/");
export const getUsers = () => api.get("/users");
export const postMuestra = content => api.post("/muestra", content);

const apis = {
    getAll,
  getUsers,
  postMuestra
};

export default apis;

import axios from "axios";

const api = axios.create({
  baseURL: "https://ieee-backend-utp.herokuapp.com/api/users"
});

export const getAll = () => api.get("/");
export const getUsers = () => api.get("/users");
export const postLogin = content => api.post("/login", content);
export const postRegister = content => api.post("/register", content);


const apis = {
    getAll,
  getUsers,
  postLogin,
  postRegister
};

export default apis;

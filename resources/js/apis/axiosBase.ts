import axios from "axios";
export const axiosBase = axios.create({
    baseURL: "http://localhost:80/api",
    timeout: 5000,
});

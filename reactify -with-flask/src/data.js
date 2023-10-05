import axios from "axios";
const API_URL = "http://localhost:5000/api";
export function fetchCurrentUser() {
    const token = localStorage.getItem("userToken");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/current_user`, { headers });
}

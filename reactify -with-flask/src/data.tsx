import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:5000/api";

type User = {
  id: number;
  username: string;
  email: string;
};

export function fetchCurrentUser(): Promise<AxiosResponse<User>> {
  const token: string | null = localStorage.getItem("userToken");
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };

  return axios.get<User>(`${API_URL}/current_user`, { headers });
}

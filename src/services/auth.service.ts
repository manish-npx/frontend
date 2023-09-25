import axios from "axios";
import { BASE_URL } from "../config/config";


const API_URL = BASE_URL + "auth/";

export const register = (name: string, email: string, password: string, confirmPassword: string) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    password_confirmation: confirmPassword
  });
};

console.log('API_URL', BASE_URL)

export const login = async (email: string, password: string) => {

  return await axios.post(API_URL + "login", { email, password, })
    .then((response) => {
      console.log(response)
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("user-data", JSON.stringify(response.data));
        localStorage.setItem("_token", JSON.stringify(response.data.user.token));
      }
      return response.data;

    });


};

export const logout = () => {

  localStorage.removeItem("user");
  localStorage.removeItem("user-data");
  localStorage.removeItem("_token");

};

export const getCurrentUser = () => {

  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;

};

export const getCurrentUserData = () => {

  const userData = localStorage.getItem("user-data");
  if (userData) return JSON.parse(userData);
  return null;

};

export const _token = (): string | null => {

  const _token = localStorage.getItem("_token");

  if (_token) return JSON.parse(_token);

  return null;

}


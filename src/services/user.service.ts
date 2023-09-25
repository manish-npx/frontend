import axios from "axios";
import authHeader from "./auth-header";
import { getCurrentUser } from "./auth.service";

const API_URL = "http://127.0.0.1:5000/api/";


const currentUser = getCurrentUser();

export const getPublicContent = () => {
  return axios.get(API_URL + "all", { headers: authHeader() });
};

export const getUserBoard = () => {
  return axios.get(API_URL + "get-user/" + currentUser.user.id, { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

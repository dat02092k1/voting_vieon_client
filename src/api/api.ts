import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { utilContainer } from "../shared/constants/utilContainer";
import { UsersState } from "../types/interface";

const getRappers = async () => {
  try {
    const res = await axios.get(`${utilContainer.baseUrl}contestant`);

    const rappers: Rapper[] = res.data.data.rappers;

    return rappers;
  } catch (error) {
    console.log(error);
  }
};

export const useRappers = () => {
    return useQuery(['rappers'], getRappers);
}  

const getUsers = async () => {
  try {
    const res = await axios.get(`${utilContainer.baseUrl}user`);
    const users: UsersState[] = res.data.data.users;

    return users;
  } catch (error) {
    console.log(error);
  }
};

export const useUsers = () => {
  return useQuery(['users'], getUsers);
}  

export const deleteDepartment = async (id) => {
  const res = await axios.delete(`${utilContainer.baseUrl}/department/${id}`);
  return res.data;
}
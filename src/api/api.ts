import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { utilContainer } from "../shared/constants/utilContainer";

export const getRappers = async () => {
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
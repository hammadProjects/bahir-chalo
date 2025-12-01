"use server";

import { generateError } from "@/lib/utils";
import api from "@/services/api";
import { Consultant } from "@/types/types";

export const getVerifiedConsultants = async () => {
  try {
    const data = await api.get("/consultant", {
      withCredentials: true,
    });

    return data.data?.data?.consultants as Consultant[];
  } catch (error) {
    console.log(generateError(error));
    return [];
  }
};

export const searchVerifiedConsultants = async (searchQuery: string) => {
  try {
    console.log("did this endpoint got hit huh", searchQuery);
    const data = await api.get(`/consultant/search?search=${searchQuery}`, {
      withCredentials: true,
    });

    return data.data?.data?.consultants as Consultant[];
  } catch (error) {
    console.log(generateError(error));
    return [];
  }
};

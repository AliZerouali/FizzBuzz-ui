import axios from "axios";
import {
  FizzBuzzRequest,
  FizzBuzzResponse,
  StatisticsResponse,
} from "../types";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fizzBuzzApi = {
  generate: async (request: FizzBuzzRequest): Promise<FizzBuzzResponse> => {
    const params = new URLSearchParams({
      int1: request.int1.toString(),
      int2: request.int2.toString(),
      limit: request.limit.toString(),
      str1: request.str1,
      str2: request.str2,
    });

    const response = await api.get<FizzBuzzResponse>(
      `/FizzBuzz/generate?${params}`,
    );
    return response.data;
  },

  getMostFrequentRequest: async (): Promise<StatisticsResponse> => {
    const response = await api.get<StatisticsResponse>(
      "/Statistics/most-frequent",
    );
    return response.data;
  },
};

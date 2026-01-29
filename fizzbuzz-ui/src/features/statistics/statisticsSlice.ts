import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fizzBuzzApi } from "../../services/api";
import { StatisticsResponse, ApiError } from "../../types";

interface StatisticsState {
  data: StatisticsResponse | null;
  loading: boolean;
  error: ApiError | null;
}

const initialState: StatisticsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchMostFrequentRequest = createAsyncThunk(
  "statistics/fetchMostFrequent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fizzBuzzApi.getMostFrequentRequest();
      return response;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data || "Failed to fetch statistics",
        status: error.response?.status,
      });
    }
  },
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMostFrequentRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMostFrequentRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMostFrequentRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ApiError;
      });
  },
});

export default statisticsSlice.reducer;

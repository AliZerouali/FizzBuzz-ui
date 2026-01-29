import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fizzBuzzApi } from "../../services/api";
import { FizzBuzzRequest, FizzBuzzResponse, ApiError } from "../../types";

interface FizzBuzzState {
  request: FizzBuzzRequest;
  response: FizzBuzzResponse | null;
  loading: boolean;
  error: ApiError | null;
}

const initialState: FizzBuzzState = {
  request: {
    int1: 3,
    int2: 5,
    limit: 100,
    str1: "fizz",
    str2: "buzz",
  },
  response: null,
  loading: false,
  error: null,
};

export const generateFizzBuzz = createAsyncThunk(
  "fizzBuzz/generate",
  async (request: FizzBuzzRequest, { rejectWithValue }) => {
    try {
      const response = await fizzBuzzApi.generate(request);
      return response;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data || "Failed to generate FizzBuzz",
        status: error.response?.status,
      });
    }
  },
);

const fizzBuzzSlice = createSlice({
  name: "fizzBuzz",
  initialState,
  reducers: {
    updateRequest: (state, action: PayloadAction<Partial<FizzBuzzRequest>>) => {
      state.request = { ...state.request, ...action.payload };
    },
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateFizzBuzz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateFizzBuzz.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(generateFizzBuzz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ApiError;
      });
  },
});

export const { updateRequest, resetState } = fizzBuzzSlice.actions;
export default fizzBuzzSlice.reducer;

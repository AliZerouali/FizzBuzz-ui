import { configureStore } from "@reduxjs/toolkit";
import fizzBuzzReducer from "../features/fizzbuzz/fizzBuzzSlice";
import statisticsReducer from "../features/statistics/statisticsSlice";

export const store = configureStore({
  reducer: {
    fizzBuzz: fizzBuzzReducer,
    statistics: statisticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

import { useAppDispatch, useAppSelector } from "./storeHooks";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useAppDispatch, useAppSelector };

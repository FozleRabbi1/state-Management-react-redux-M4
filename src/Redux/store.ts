import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice"; // counterSlice এর নাম change করা হয়েছে
import { Logger } from "./Middleware/Logger";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    // এই counter slice , UseSelector এর  callBack Function এর মধ্যে call করা হবে  ( App.tsx file এ )
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // redux-logger package
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger), // custome made

  // devTools: false,    // production এর সময় devTools false করে দিতে হবে ,,,,
});

// ==========>>>> getState , এর ফলে reducer এর মধ্যে যত state আছে তা সব গুলো পেয়ে যাব
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

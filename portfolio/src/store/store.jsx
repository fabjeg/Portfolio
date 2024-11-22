import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sectionReducer from "../slices/slicesAbout";  // Assure-toi que le chemin est correct

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, sectionReducer);

export const store = configureStore({
  reducer: {
    section: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

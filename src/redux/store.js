import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const authPersistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filterReducer,
//   },
// });
// export default store;

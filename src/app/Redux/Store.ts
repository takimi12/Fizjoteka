// to jest moj store import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Cartslice";
// import storage from 'redux-persist/lib/storage'; // dla LocalStorage
// import { persistReducer, persistStore } from 'redux-persist';
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import storage from 'redux-persist/lib/storage'; // dla LocalStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Konfiguracja dla persistowania stanu
const persistConfig = {
  key: 'root',
  storage,
};

// Połączenie wszystkich reduktorów
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Dodanie mechanizmu persistowania do głównego reduktora
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Konfiguracja sklepu (store) z wykorzystaniem reduktora z mechanizmem persistowania
const store = configureStore({
  reducer: persistedReducer,
});

// Zdefiniowanie typu RootState, który reprezentuje cały stan aplikacji
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;

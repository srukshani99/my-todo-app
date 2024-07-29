import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers'
import { useDispatch } from "react-redux";;


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
export const persistor = persistStore(store);
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import settingReducer from './Slices/settingSlice';
import permSettingSlice from './Slices/permSettingSlice';
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
  settings: settingReducer,
  permSetting: permSettingSlice
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['settings']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;

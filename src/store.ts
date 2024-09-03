import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import userReducer from './slices/userSlice';
import searchReducer from './slices/searchData';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    searchData: searchReducer,
    skills: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

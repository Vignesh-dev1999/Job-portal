import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"
import { stat } from 'fs';
interface DataState {
  data: any;
}

const initialState: DataState = {
  data: {
    jobs:[]
  },
};

const userSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setApply(state, action: PayloadAction<any>) { 
      state.data.jobs.push(state);
    },
    searchData(state, action: PayloadAction<any>) { 
      state.data = action.payload;
    },
  },
});

export const { setApply } = userSlice.actions;

export const selectSkills = (state: RootState) => state.data.data;

export default userSlice.reducer;

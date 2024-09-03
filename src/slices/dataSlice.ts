import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface DataState {
  data: any;
}

const initialState: DataState = {
  data: {},
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) { 
      state.data = action.payload;
    },
    searchData(state, action: PayloadAction<any>) { 
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.data;

export default dataSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"
import data from "../data/jobs.json"

const importantItems = Array.isArray(data) ? data.slice(0, 10) : [];

interface DataState {
    data: Array<any>;
}

const initialState: DataState = {
    data: importantItems,
};

const searchSlice = createSlice({
    name: 'searchdata',
    initialState,
    reducers: {
        searchData(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
    },
});

export const { searchData } = searchSlice.actions;

export const selectData = (state: RootState) => state.searchData.data;

export default searchSlice.reducer;
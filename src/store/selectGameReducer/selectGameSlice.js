import { createSlice } from '@reduxjs/toolkit';
import { getGameDetails, getScreenshots } from './selectGameOperation';

const initialState = {
  game: null,
  screenshots: null,
  isLoading: false,
  error: null,
};

export const selectGameSlice = createSlice({
  name: 'selectGame',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getGameDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGameDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      })
      .addCase(getGameDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getScreenshots.pending, state => {
        state.isLoading = true;
      })
      .addCase(getScreenshots.fulfilled, (state, action) => {
        state.isLoading = false;
        state.screenshots = action.payload.map(({ image }) => image);
      })
      .addCase(getScreenshots.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const selectGameReducer = selectGameSlice.reducer;
export default selectGameReducer;
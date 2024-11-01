import { createSlice } from '@reduxjs/toolkit';
import { filterByCurrentDate, filteredList } from 'utils';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: null,
    days: [],
    unit: "Celsius",
    hours: [],
    infoModalOpened: false,
  },
  reducers: {
    setWeatherData: (state, { payload: { current, list } }) => {
      state.current = current;
      state.days = filteredList(list);
      state.hours = filterByCurrentDate(current, list)
    },
    setUnit: (state, { payload }) => {
      state.unit = payload;
    },
    onToggleInfoModal: (state, { payload }) => {
      state.infoModalOpened = payload;
    }
  },
});

export const { setWeatherData, setUnit, onToggleInfoModal } = weatherSlice.actions;
export const selectWeatherData = (state: any) => state.weather;
export default weatherSlice.reducer;
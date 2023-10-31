// slices/appSlice.js

import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    // Define aquí el estado inicial de tu aplicación
    isLogged: false
  },
  reducers: {
    // Define las acciones que pueden modificar el estado
    loggedAction: (state, action) => {
      // Actualiza el estado según la acción
      state.isLogged = true
    },
  },
});

export const { loggedAction } = loginSlice.actions;

export default loginSlice.reducer;

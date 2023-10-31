// store.js

import { configureStore } from '@reduxjs/toolkit';
import LoginReducers from './reducers/LoginReducers';

const store = configureStore({
  reducer: {
    loginStatus: LoginReducers,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import currencyNewsReducer from './features/crypto/cryptoSlice';

export const store =  configureStore({
  reducer: {
    darkTheme: themeReducer,
    currencyNews: currencyNewsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const getCurrencies = createAsyncThunk(
  'allCurrencies/fetchPosts',
  async(data, thunkApi) => {
    try {
      const response = await fetch("https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=5")
      const data = await response.json()
      return data.news
    } catch(error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

interface ICurrencyState {
  isLoading: boolean;
  error: null | string;
  data: null | any[]
}

const initialState: ICurrencyState = {
  isLoading: false,
  error: null,
  data: null,
}

const currencySlice = createSlice({
  name: "allCurrency",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurrencies.pending, (state) => ({...state, isloading: true}))
      .addCase(getCurrencies.fulfilled, (state, action: PayloadAction<any[]>) => (
        {...state, data: action.payload, isLoading: false}
      ))
      .addCase(getCurrencies.rejected, (state, action: PayloadAction<any>)=> (
        {...state, error: action.payload,isLoading: false}
      ))
  },
})

export const getCurrenciesAction = currencySlice.actions;

export default currencySlice.reducer;
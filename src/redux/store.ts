import { configureStore } from '@reduxjs/toolkit'
import { searchArticlesSlice } from './searchArticlesSlice/searchArticlesSlice'
import { statusAppSlice } from './statusAppSlice/statusAppSlice'

export const store = configureStore({
    reducer: {
        propsForSearch: searchArticlesSlice.reducer,
        globalStatusApp: statusAppSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

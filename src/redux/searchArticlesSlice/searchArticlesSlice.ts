import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    search: string
    itemsPerPage: number
    resultPerPage: number
}

const initialState: CounterState = {
    search: '',
    itemsPerPage: 6,
    resultPerPage: 0,
}

export const searchArticlesSlice = createSlice({
    name: 'searchArticles',
    initialState,
    reducers: {
        searchByInput: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        articlesPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload
        },
        resultPerPage: (state, action: PayloadAction<number>) => {
            state.resultPerPage = action.payload
        },
    },
})

export const { searchByInput, articlesPerPage, resultPerPage } =
    searchArticlesSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
    isModalOpen: boolean
    articleId: number
}

const initialState: CounterState = {
    isModalOpen: false,
    articleId: 0,
}

export const statusAppSlice = createSlice({
    name: 'appStatus',
    initialState,
    reducers: {
        isModalToggler: (state) => {
            state.isModalOpen = !state.isModalOpen
        },
        articleId: (state, action: PayloadAction<number>) => {
            state.articleId = action.payload
        },
    },
})

export const { isModalToggler, articleId } = statusAppSlice.actions

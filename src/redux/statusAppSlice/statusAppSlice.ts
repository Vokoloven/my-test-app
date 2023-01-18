import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isModalOpen: boolean
}

const initialState: CounterState = {
    isModalOpen: false,
}

export const statusAppSlice = createSlice({
    name: 'appStatus',
    initialState,
    reducers: {
        isModalOpen: (state) => {
            state.isModalOpen = !state.isModalOpen
        },
    },
})

export const { isModalOpen } = statusAppSlice.actions

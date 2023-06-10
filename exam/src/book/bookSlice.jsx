import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        value: []
    },
    reducers: {
        // increment: state => {
        //     state.value += 1
        // }
        add: (state, {payload}) => {
            console.log(payload)
        },
        update: (state, payload) => {
            console.log(payload)
        }
    }
})

export const {add } = bookSlice.actions

export default bookSlice.reducer;
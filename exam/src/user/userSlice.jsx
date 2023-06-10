import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: []
    },
    reducers: {
        // increment: state => {
        //     state.value += 1
        // }
    }
})

export const { } = userSlice.actions

export default userSlice.reducer;
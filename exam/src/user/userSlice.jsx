import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: [
            {
                id: 0,
                name: 'Hulk',
                level: 'Middle',
                field: 'Frontend',
                hobby: 'Gardening',
                reading: 'Algorithms',
            },
            {
                id: 1,
                name: 'Steve',
                level: 'Founder',
                field: 'Technology',
                hobby: 'Startups',
                reading:  'Data structures',
            }
        ]
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.value.push(payload)
        },
        updateUser: (state, { payload }) => {
            const { id } = payload;
            state.value[id] = payload;
        },
        deleteUser: (state, { payload }) => {
            state.value = state.value.filter(elem => elem.id !== payload)
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer;
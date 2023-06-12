import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: [
            {
                name: 'Hulk',
                level: 'Middle',
                field: 'Frontend',
                prefer: [
                    'algorithms', 'data structures'
                ],
                reading: [],
                hobby: ['cooking', "videogames"]
            },
            {
                name: 'Steve',
                level: 'Founder',
                field: 'Technology',
                prefer: [
                    'animation', 'product'
                ],
                reading: [],
                hobby: ['calligraphy', 'startup']
            }
        ]
    },
    reducers: {
        addUser: (state, {payload}) => {
            state.value.push(payload)
        },
        updateUser: (state, {payload}) => {
            const {id} = payload;
            state.value[id] = payload;
        },
        deleteUser: (state, {payload}) => {
            state.value = state.value.filter(elem => elem.id !== payload)
        }
    }
})

export const {addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        value: [
            {
                id: 0,
                name: 'Algorithms',
                author: 'Thomas Cormen and others',
                date: '2023-05-20',
                status: true,
                photo: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg'
            },
            {
                id: 1,
                name: 'Data structures',
                author: 'Steven Skienna',
                date: '2023-04-20',
                status: false,
                photo: 'https://m.media-amazon.com/images/I/71kBRLo8ZtL._AC_UF1000,1000_QL80_.jpg'
            }
        ]
    },
    reducers: {
        // increment: state => {
        //     state.value += 1
        // }
        add: (state, {payload}) => {
            // console.log(payload)
            state.value.push(payload)
        },
        updateBook: (state, {payload}) => {
            const {id} = payload;
            state.value[id] = payload;
        },
        deleteBook: (state, {payload}) => {
            state.value = state.value.filter(elem => elem.id !== payload)
            console.log(state.value)
        },
        sorted: (state, {payload}) => {
            state.value = state.value.sort((a, b) => {
                return a[payload] > b[payload] ? 1: -1;
            })
        }
    }
})

export const {add, updateBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer;
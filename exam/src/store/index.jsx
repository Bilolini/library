import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../user/userSlice';
import bookReducer from '../book/bookSlice';

export default configureStore({
    reducer: {
        book: bookReducer,
        user: userReducer
    }
})
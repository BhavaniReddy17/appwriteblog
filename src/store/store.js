import {configureStore} from '@reduxjs/toolkit';
import authReducer from './AuthSliceuthSlice';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;
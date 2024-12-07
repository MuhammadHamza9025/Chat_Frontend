import { configureStore } from '@reduxjs/toolkit'
import customslice from '../Reducer/Reducer'

const store = configureStore({
    reducer: {
        customreducer: customslice
    },
})

export default store;

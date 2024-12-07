import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    count: 10,
    username: '',
    allusers: [],
    id: '',
    userId: '',
    messages: []
};
const customreducer = createSlice({
    name: 'customreducer',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload
        },
        getuser(state, action) {
            return { ...state, username: action.payload }
        },
        allusers(state, action) {
            return { ...state, allusers: action.payload }
        },
        userid(state, action) {
            return { ...state, id: action.payload }
        },
        conversation_message(state, action) {
            return { ...state, messages: action.payload }
        },

        getuserId(state, action) {
            return { ...state, userId: action.payload }
        }

    }
})

export const { increment, getuser, allusers, userid, conversation_message, getuserId } = customreducer.actions;
export default customreducer.reducer;
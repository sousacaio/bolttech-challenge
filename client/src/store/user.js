import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: '',
        account: '',
    },
    reducers: {
        update: (state, action) => {               
            state._id = action.payload._id
            state.account = action.payload.account
        },
    },
})

export const { update } = userSlice.actions

export default userSlice.reducer
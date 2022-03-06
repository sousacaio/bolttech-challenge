import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        data: [],
    },
    reducers: {
        update: (state, action) => {
            state.data = action.payload
        },
        newProject: (state, action) => {
            state.data.push(action.payload)
        },
        deleteProjectFromStore: (state, action) => {
            let projectId = action.payload._id
            state.data = state.data.filter((project) => project._id !== projectId)
        },
    },
})

export const { update, newProject,deleteProjectFromStore } = projectsSlice.actions

export default projectsSlice.reducer
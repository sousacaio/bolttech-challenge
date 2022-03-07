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
            if (!state.data) {
                state.data = [action.payload]
                return
            }
            state.data.push(action.payload)
        },
        deleteProjectFromStore: (state, action) => {
            let projectId = action.payload._id
            state.data = state.data.filter((project) => project._id !== projectId)
        },
        editProject: (state, action) => {
            let projectId = action.payload._id
            state.data = state.data.map((project) => {
                if (project._id === projectId) {
                    return { ...project, name: action.payload.name }
                }
                return project
            })
        },
        addTask: (state, action) => {
            let projectId = action.payload._id
            state.data = state.data.map((project) => {
                if (project._id === projectId) {
                    return { ...project, tasks: action.payload.tasks }
                }
                return project
            })
        },
        removeTask: (state, action) => {
            let projectId = action.payload._id
            state.data = state.data.filter((project) => project._id !== projectId)
        },
    },
})

export const { update, newProject, deleteProjectFromStore, editProject,addTask } = projectsSlice.actions

export default projectsSlice.reducer
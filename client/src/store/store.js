import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './projects'
import userReducer from './user'

export default configureStore({
    reducer: {        
        projects:projectsReducer,
        user:userReducer
    },
})
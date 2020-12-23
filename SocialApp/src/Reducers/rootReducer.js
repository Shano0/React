import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import loggedUserReducer from './loggedUserReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'


let rootReducer = combineReducers({
    loggeduser: loggedUserReducer,
    posts: postsReducer,
    allusers: usersReducer,
    firestoreReducer
})

export default rootReducer;
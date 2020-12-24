import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firebaseReducer} from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore'


let rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer,
    // firestore: firestoreReducer,
    allusers: usersReducer,
    posts: postsReducer,
})

export default rootReducer;
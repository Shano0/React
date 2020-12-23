import {createStore, applyMiddleware, compose} from 'redux';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/rootReducer'



let store = createStore(rootReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),

));

export default store;
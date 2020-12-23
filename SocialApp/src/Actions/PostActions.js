import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import store from '../Store';

const loggedUser= store.getState().loggeduser
console.log(loggedUser, ' loggeduser FROM ACTIONS')

export const likePost=(id, loggedUser)=>({
    type: 'LIKE',
    postid: id,
    loggedUser
})

export const addComment=(comment, postid, loggedUser)=>({
    type: 'ADD_COMMENT',
    postid,
    comment,
    loggedUser
    
})

export const addPost=(post)=>{
    const firestore = getFirestore();
    firestore.collection('posts').add({
        post
    })

    return(dispatch, getState, { getFirebase, getFirestore })=>{
       dispatch({ 
        type: 'ADD_POST',
        post})
    }
}   

export const delPost=(postid, loggedUser)=>({
    type: 'DELETE_POST',
    postid,
    loggedUser
});
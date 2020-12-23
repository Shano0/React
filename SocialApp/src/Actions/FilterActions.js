import store from '../Store'
import firebase from '../config/fbConfig'

const db = firebase.firestore()

export const filterPostsByUser=(userid)=>({
        type: 'FILET_POSTS_BY_USER',
        userid
})

export const filterPostsByContent=(keyword)=>({
    type: 'FILET_POSTS_BY_CONTENT',
    keyword
})



 


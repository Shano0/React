import React from 'react';
import {likePost, addComment, delPost} from '../Actions/PostActions';
import Status from './Status';

function Posts(props) {
    let posts = props.profileuserid === null ? props.posts: props.posts.filter((e)=>e.authoruserid===parseInt(props.profileuserid))
    console.log(props.posts, 'props')
    console.log(posts, 'posts var')
    return (
        <div>
        {posts.map((e)=>
        <Status 
        key={e.id} 
        post={e} 
        likePost={likePost} 
        delPost={delPost}
        addComment={addComment}
        user={props.user}
         />)}
        </div>

    )
}

export default Posts;

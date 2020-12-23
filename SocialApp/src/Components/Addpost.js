import React from 'react';
import {useDispatch} from 'react-redux';
import {getCurrentDate} from '../getDate'


export default function Addpost(props) {
    const dispatch=useDispatch()
    let post={
        authorname: '',
        content:'',
        date:''
    }

    let setPostAttributes=()=>{
        post.date=getCurrentDate();
        post.authorname=props.user.username;
        // console.log(post, 'setpost')
        
}



    return (
        <div className="addpost">
            <div className="postheader">Status</div>
            <div className="postcontent">
                <form>
                    <input onChange={(event)=>post.content=event.target.value} className="textarea" type="textarea" placeholder="What's on your mind ?"/>
                    <input onClick={()=>{setPostAttributes();  
                        post.content!==''? dispatch(props.addPost(post)):setPostAttributes()}} 
                        className="postbtn" type="reset" value="Post" />
                </form>
            </div>
        </div>
    )
}

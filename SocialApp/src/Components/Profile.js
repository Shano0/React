import React from 'react';
import coverImage from '../img/defaultCover.png';
import userPic from '../img/user.jpg';
import Posts from './Posts';

export default function Profile(props) {
    let [profileuser] =props.allusers.filter((e)=>e.id===parseInt(props.match.params.id))
    return (
        // <div className="profileDiv">
        //     <p className="coverImageContainer"><img src={coverImage} alt=""/></p>
        //     <div className="userImgContainer"><img src={userPic} alt=""/></div>
        //     <div className="userInfo">
        //         <p>{profileuser.username}</p>
        //     </div>
        //     <div className="userPosts">
        //     <Posts posts={props.posts} user={props.user} profileuserid={props.match.params.id}/>
        //     </div>
        // </div>
        null
    )
}

import React from 'react';
import coverImage from '../img/defaultCover.png';
import userPic from '../img/user.jpg';
import Posts from './Posts';
import {connect} from 'react-redux';
import {getUserDisplayName} from '../Helpers/getUserDisplayName'

function Profile(props) {
    console.log(props.user.auth)
    let profileuser=props.allusers.filter((e)=>e.id===props.match.params.id)
    return (
        <div className="profileDiv">
            <p className="coverImageContainer"><img src={coverImage} alt=""/></p>
            <div className="userImgContainer"><img src={userPic} alt=""/></div>
            <div className="userInfo">
                <p>{props.user.uid===props.match.params.id? getUserDisplayName():profileuser.getUserDisplayName }</p>
            </div>
            <div className="userPosts">
            <Posts posts={props.posts} user={props.user} profileuserid={props.match.params.id}/>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    posts: state.posts,
    allusers: state.allusers,
    user: state.firebase.auth
  })


export default connect(mapStateToProps)(Profile);


  
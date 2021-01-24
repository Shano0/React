import React, {useState} from 'react';
import coverImage from '../img/defaultCover.png';
import userPic from '../img/user.jpg';
import Posts from './Posts';
import {addFriend, confirmFriendRequest} from '../Actions/FriendActions'
import {connect, useDispatch} from 'react-redux';
import {getUserDisplayName} from '../Helpers/getUserDisplayName'


function Profile(props) {
    const dispatch=useDispatch()
    let profileuser=props.allusers.filter((e)=>e.id===props.match.params.id)[0]
    let render= typeof profileuser!=='undefined'



    let getFriendState=()=>{
        if (profileuser.friendlist.includes(props.user.uid)){
            return('Remove Friend')
        }else if(profileuser.friendrequests.includes(props.user.uid)){
            return('Friend Request Sent')
        }else if(props.friendrequests.includes(props.match.params.id)){
            return('Confirm Friend Request')
        }else{
            return('Add Friend')
        } 
    }


    let [friendstate, setFriendState]= useState('') 

    if(render && friendstate===''){
        setFriendState(getFriendState(props.user.uid))
    }

    let addFriendClick = ()=>{
        if (friendstate==='Add Friend'){
            dispatch(addFriend(props.user.uid, props.match.params.id, friendstate))
            setFriendState('Friend Request Sent')
        }else if(friendstate==='Friend Request Sent'){
            dispatch(addFriend(props.user.uid, props.match.params.id, friendstate))
            setFriendState('Add Friend')
        }else if (friendstate==='Confirm Friend Request'){
            dispatch(confirmFriendRequest(props.user.uid, props.match.params.id))
            setFriendState('Remove Friend')
        } else{
            dispatch(addFriend(props.user.uid, props.match.params.id, friendstate))
            setFriendState('Add Friend')
        }
    }
    
    return (
        render?
        <div className="profileDiv">
            <p className="coverImageContainer"><img src={coverImage} alt=""/></p>
            <div className="userImgContainer"><img src={userPic} alt=""/></div>
            <div className="userInfo">
                <p>{props.user.uid===props.match.params.id? getUserDisplayName():profileuser.displayName}</p>
            </div>
            
            <div style={{display: props.match.params.id !==props.user.uid ? '':'none'}} className='addFriendButtonContainer'>
                <button onClick={()=>addFriendClick()} className='addFriendButton'>{friendstate}</button>
            </div>
            
            <div className="userPosts">
            <Posts posts={props.posts} user={props.user} profileuserid={props.match.params.id}/>
            </div>
        </div>
        :''
    )
}

const mapStateToProps=(state)=>({
    posts: state.posts,
    allusers: state.allusers,
    user: state.firebase.auth,
    friendrequests: state.friendRequests
  })


export default connect(mapStateToProps)(Profile);


  
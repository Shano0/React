import React, {useState} from 'react';
import userPic from '../img/user.jpg';
import {Link} from 'react-router-dom';
import {addFriend, confirmFriendRequest} from '../Actions/FriendActions'
import {connect, useDispatch} from 'react-redux';


function User(props) {
    const dispatch=useDispatch()
    let loggeduser=props.allusers.filter((e)=>e.id===props.loggeduser.uid)[0]

    let getFriendState=()=>{
        if (loggeduser.friendlist.includes(props.user.id)){
            return('Remove Friend')
        }else if(props.user.friendrequests.includes(loggeduser.uid)){
            return('Friend Request Sent')
        }else if(props.friendrequests.includes(props.user.id)){
            return('Confirm Friend Request')
        }else{
            return('Add Friend')
        } 
    }

    let [friendstate, setFriendState]= useState('') 

    if(friendstate===''){
        setFriendState(getFriendState(props.user.uid))
    }

    let addFriendClick = ()=>{
        if (friendstate==='Add Friend'){
            dispatch(addFriend(props.auth.uid, props.user.id, friendstate))
            setFriendState('Friend Request Sent')
        }else if(friendstate==='Friend Request Sent'){
            dispatch(addFriend(props.auth.uid, props.user.id, friendstate))
            setFriendState('Add Friend')
        }else if (friendstate==='Confirm Friend Request'){
            dispatch(confirmFriendRequest(props.auth.uid, props.user.id))
            setFriendState('Remove Friend')
        } else{
            dispatch(addFriend(props.auth.uid, props.user.id, friendstate))
            setFriendState('Add Friend')
        }
    }

    return (
        <div className='status'>       
            <div className="author">
                <Link to={`/profile/${props.user.id}`}>
                    <img className="authorimg pplImg" src={userPic} alt="authorimg"/>
                </Link>
                    <div className="authornamedate pplName">
                        <Link to={`/profile/${props.user.id}`}>
                            <p>{props.user.displayName}</p>
                        </Link>
                    </div>
                    <span className="addFriendButtonContainerUser"  style={{display: props.auth.uid !==props.user.id ? '':'none'}}>
                        <button onClick={()=>addFriendClick()} className='addFriendButtonUser'>{friendstate}</button>
                    </span>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>(
    {
    allusers: state.allusers,
    loggeduser: state.firebase.auth,
    friendrequests: state.friendRequests,
    auth: state.firebase.auth,
  })


export default connect(mapStateToProps)(User);

import React, {useState} from 'react';
import userPic from '../img/user.jpg';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';


function User(props) {
    let loggeduser=props.allusers.filter((e)=>e.id===props.loggeduser.uid)[0]

    let getFriendState=()=>{
        if (loggeduser.friendlist.includes(props.user.uid)){
            return('Remove Friend')
        }else if(loggeduser.friendrequests.includes(props.user.uid)){
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

    return (
        <div className='status'>       
            <div className="author">
                <Link to={`/profile/${props.user.id}`}>
                    <img className="authorimg" src={userPic} alt="authorimg"/>
                </Link>
                    <div className="authornamedate">
                        <Link to={`/profile/${props.user.id}`}>
                            <p>{props.user.displayName}</p>
                        </Link>
                    </div>
                    <span>{friendstate}</span>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>(
    {
    allusers: state.allusers,
    loggeduser: state.firebase.auth,
    friendrequests: state.friendRequests
  })


export default connect(mapStateToProps)(User);

import React from 'react'
import User from './User'
import {connect} from 'react-redux'


function People(props) {
    let filteredUsers = props.userNameFilter === null ? props.allusers : props.allusers.filter((e)=>e.displayName.toUpperCase().includes(props.userNameFilter.toUpperCase()))

    if(window.location.pathname.includes('/Request')){
        filteredUsers = props.allusers.filter((e)=>props.friendRequests.includes(e.id))
    }

    return (
        <div className='people'>
            {filteredUsers.map((user)=><User key={user.id} user={user}/>)}
        </div>
    )
}

const mapStateToProps=(state)=>({
    allusers: state.allusers,
    friendRequests: state.friendRequests
})

export default connect(mapStateToProps)(People);

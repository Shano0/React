import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../Actions/AuthActions'
import {Redirect} from 'react-router-dom'


function Header(props) {

    const [searchState,setSearchState]= useState({
        keyword:'',
    })

    const handleChange=(e)=>{
        setSearchState({
            keyword:e.target.value
        })
    }

    if(props.auth.isLoaded && !props.auth.uid) return <Redirect to='/Login'/>
    if(window.location.pathname !== '/Login' && window.location.pathname !== '/Register'){
    return (
        <nav>
            <img src="" alt=""/>
            <div className="search">
                <input onChange={(e)=>handleChange(e)} className="searchTxt" name="search" type="text" placeholder="Search..."/>
                <Link to={`/Search/${searchState.keyword}`}>
                    <input className="searchBtn" type="button" id="searchButton" />
                </Link>
            </div>
            <ul>
                <Link to="/Requests">
                    <li className='navLinks' id='friendRequests' style={{display: props.friendRequests.length>0 ? '':'none'}}>Friend Requests ({props.friendRequests.length})</li>
                </Link>
                <Link to='/'>
                    <li className='navLinks'>Home</li>
                </Link>
                <Link to='/People'>
                    <li className='navLinks'>People</li>
                </Link>
                <Link to={`/profile/${props.auth.uid}`}>
                    <li className='navLinks'>Profile</li>
                </Link>
                    <li  onClick={props.signOut} >
                        <a className='navLinks' name='asd' href='#asd'>Log Out</a>
                    </li>       
            </ul>
        </nav>
    )
}else{
    return null}

}

const mapStateToProps=(state)=>({
    auth: state.firebase.auth,
    friendRequests: state.friendRequests
  })

const mapDispatchToProps=(dispatch)=>({
    signOut: ()=>{dispatch(signOut())}
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);
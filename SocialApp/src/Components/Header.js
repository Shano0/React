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
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/People'>
                    <li>People</li>
                </Link>
                <Link to={`/profile/${props.auth.uid}`}>
                    <li>Profile</li>
                </Link>
                    <li onClick={props.signOut}>
                        <a name='asd' href='#asd'>Log Out</a>
                    </li>       
            </ul>
        </nav>
    )
}else{
    return null}

}

const mapStateToProps=(state)=>({
    auth: state.firebase.auth
  })

const mapDispatchToProps=(dispatch)=>({
    signOut: ()=>{dispatch(signOut())}
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);
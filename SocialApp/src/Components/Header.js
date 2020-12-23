import React from 'react'
import {Link} from 'react-router-dom';


export default function Header(props) {
    return (
        <nav>
            <img src="" alt=""/>
            <div className="search">
                <input className="searchTxt" name="search" type="text" placeholder="Search..."/>
                <Link to={`/Search/${props.searchkeyword}`}>
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
                <Link to={`/profile/${props.user.userid}`}>
                    <li>Profile</li>
                </Link>
            </ul>
        </nav>
    )
}

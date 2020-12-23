import React from 'react';
import userPic from '../img/user.jpg';
import {Link} from 'react-router-dom';


export default function User(props) {
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
            </div>
        </div>
    )
}

import React from 'react'
import User from './User'

export default function People(props) {
    // console.log(props)
    return (
        <div className='people'>
            {props.allusers.map((user)=><User user={user}/>)}
        </div>
    )
}

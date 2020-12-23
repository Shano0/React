import React from 'react';
import userPic from '../img/user.jpg';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Status(props) {
    let liked = props.post.likedUsers.includes(props.user.userid)
    const dispatch=useDispatch()
    let commenttext=''
    return (
        <div className="status">
            <div className="author">
                <Link to={`/profile/${props.post.authoruserid}`}>
                    <img className="authorimg" src={userPic} alt="authorimg"/>
                </Link>
                    <div className="authornamedate">
                        <Link to={`/profile/${props.post.authoruserid}`}>
                            <p>{props.post.author}</p>
                        </Link>
                        <p className="greytext" >{props.post.postdate}</p>
                    </div>
                    <span style={{display: props.user.userid===props.post.authoruserid? '':'none' }}>
                        <button className="delButton" onClick={()=>dispatch(props.delPost(props.post.id))}></button>
                    </span>
                <div className="statuscontent">
                    {props.post.postcontent}
                </div>
            </div>

            {/* LIKE/DISLIKE */}

            <div className="reactPost">
                <button onClick={()=>dispatch(props.likePost(props.post.id))} className={liked? 'liked like':'like'}></button>
                <span className="likeAmount">{props.post.likedUsers.length} likes</span>
            </div>
            <hr style={{display: props.post.comments.length===0? 'none':''}}/>

            {/* COMMENTS */}

            {props.post.comments.length === 0 ? '': props.post.comments.map(e=> 
            <div key ={e.id} className="loadedComments">
                <img className="authorimg" src={userPic} alt="authorimg"/>
                    <div className="commentWrapper">
                        <div className="authornamedate">
                        <Link to={`/profile/${e.authoruserid}`}>
                            <p className="commentAuthorName">{e.authorname}</p>
                        </Link>
                        <p className="eachComment" >{e.commenttext}</p>
                    </div>
                    </div>
                </div>
                )}
                <div className="commentSection">
                  <div className="comment"></div>
                  <div className="addcomment">
                    <form>
                        <input onChange={(event)=>commenttext=event.target.value} className="commentText" type="text" placeholder="Write a comment"/>
                        <input type="reset" onClick={()=>commenttext!=='' ?dispatch(props.addComment(commenttext, props.post.id)):''} className="postbtn" value="Add" />  
                    </form>
                  </div>
            </div>
        </div>
    )
}

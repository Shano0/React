
let initialstate=[{
    id:2,
    authoruserid:1,
    author:'tst1',
    postdate: '15 Dec',
    postcontent: 'ragaca',
    likedUsers: [],
    comments:[]},
    {
    id:1,
    authoruserid:2, 
    author:'tst',
    postdate: '23 nov',
    postcontent: 'gegeg',
    likedUsers: [],
    comments:[]
    }]



let postReducer=(state=initialstate, action)=>{
    const loggeduser= action.loggeduser
    console.log(action.loggedUser, 'Loggeduser from postsreducer')
    const postIndex = state.findIndex(post => post.id === action.postid)
    let copyPost = state[postIndex]
    switch(action.type){
        case 'LIKE':
            if(!state[postIndex].likedUsers.includes(loggeduser.userid)){
                copyPost.likedUsers.push(loggeduser.userid)
                return({...state, 
                    posts: 
                    [...state.slice(0,postIndex), 
                    {...state[postIndex], likedUsers: copyPost.likedUsers}, 
                    ...state.slice(postIndex+1)]})
            }else{
                let clearedList = copyPost.likedUsers.filter(id=>id !== loggeduser.userid)
     
                return({...state, 
                    posts: 
                    [...state.slice(0,postIndex), 
                    {...state[postIndex], likedUsers: clearedList}, 
                    ...state.slice(postIndex+1)]})
            }

        case 'ADD_COMMENT':
            const commentSection = state[postIndex].comments
            const newCommentId=commentSection.length === 0 ? 1 : commentSection[commentSection.length-1].id+1
            copyPost.comments.push({
                id:newCommentId,
                authoruserid: loggeduser.userid,
                authorname: loggeduser.username,
                commenttext: action.comment
            })
            return({...state, posts:
                [...state.slice(0,postIndex), 
                {...state[postIndex], comments: copyPost.comments}, 
                ...state.slice(postIndex+1)] })
        
        case 'ADD_POST':
            const newPostId=state.length === 0 ? 1 : state[0].id+1
            return ([{
                id:newPostId,
                author: loggeduser.username,
                postdate: action.post.date,
                postcontent: action.post.content,
                likedUsers: [],
                comments: []
                }, ...state])
        
        case 'DELETE_POST':
            return({...state, posts: 
                [...state.slice(0, postIndex),
                ...state.slice(postIndex+1)]
                });
                
        default:
            return state       
    }
}

export default postReducer;
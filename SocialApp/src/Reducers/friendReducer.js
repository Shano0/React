let initialstate=[]

let friendsReducer=(state=initialstate, action)=>{
   
    switch(action.type){
        case 'FETCH_FRIEND_REQUESTS':
            return [...state.concat(action.frequests)]
        default:
            return state       
    }
}


export default friendsReducer;



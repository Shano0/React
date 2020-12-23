let initialstate={}

let authReducer=(state=initialstate, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Error' ,action.error)
            return state

        case 'LOGIN_SUCCESS':
            console.log('login')
            return state
        
        case 'LOGOUT_ERROR':
            console.log('Logout Error' ,action.error)
            return state
    
        case 'LOGOUT_SUCCESS':
            console.log('Logged Out')
            return state

        case 'SIGN_UP_ERROR':
            console.log('Registration Error' ,action.error)
            return state
        
        case 'SIGN_UP_SUCCESS':
            console.log('Registerd')
            return state
                
        default:
            return state       
    }
}

export default authReducer;
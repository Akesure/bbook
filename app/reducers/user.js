import{
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
}from '../actions/user';

export default function user(state={
  isLoggingIn:false,
  isAuthenticated:false
},action){
  switch (action.type) {
    case LOGIN_REQUEST:
      return{
        isLoggingIn:true,
        isAuthenticated:false
      }
      case LOGIN_FAILURE:
        return{
          isLoggingIn:false,
          isAuthenticated:false,
          error:action.error
        }
      case LOGIN_SUCCESS:
        return{
          ...action.data,
          isLoggingIn:false,
          isAuthenticated:true
        }
    default:
        return state

  }
}

import  {ActionTypes} from './actions'
const InitialState={
    usersData:"",
    isAuthenticated:false
   
     
}
const appReducer=(state=InitialState,action)=>{
    const newState={...state};
    switch(action.type)
    {
      
        case ActionTypes.LOAD_USER_DATA:
                 
        return {
            ...state,
            usersData:action.payload,
           
        }
       
        case ActionTypes.LOGIN_SUCCESS:
                 
                return {
                    ...state,
                    isAuthenticated:true,
                   
                }
        case ActionTypes.LOGOUT_SUCCESS:
                 
                return {
                    ...state,
                    usersData:"",
                    isAuthenticated:false,
                   
                }
               

        default: 
        return newState;
        
    }
  

    

    
}
export default appReducer;
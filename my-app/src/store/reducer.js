import  {ActionTypes} from './actions'
const InitialState={
    usersData:"",
    isAuthenticated:false,
    planetData:"",
    userDetails:""
   
     
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
                    userDetails:action.payload
                   
                }
        case ActionTypes.LOGOUT_SUCCESS:
                 
                return {
                    ...state,
                    
                    isAuthenticated:false,
                   
                }

                case ActionTypes.LOAD_PLANET_DATA:
                 
                return {
                    ...state,
                    planetData:action.payload,
                   
                }
               

        default: 
        return newState;
        
    }
  

    

    
}
export default appReducer;
import {createStore} from "redux";

import appReducer from './reducer';
 
import {combineReducers,applyMiddleware,compose} from "redux";
 
import thunkMiddleware from 'redux-thunk';

const rootReducer=combineReducers({
    app:appReducer
  
})

//using composeWithDevTools
// const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))
//  export const store=createStore(rootReducer,compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
//const store=createStore(rootReducer,compose(applyMiddleware(thunkMiddleware)))

function configureStore() {
    let store;
  
    
      store = createStore(rootReducer, compose(
         applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ));
     
  
    return store;
  }
  
  let store = configureStore();
  export default store;
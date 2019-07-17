import React from 'react';

import './App.css';
import { fetchUserService } from './services/starwarsService';
import { BrowserRouter as Router, Switch, Redirect,Route } from 'react-router-dom';
import Login from './container/Login/Login';
import Search from './container/Search/Search';
import { connect } from 'react-redux';
export class App extends React.Component {

  componentDidMount() {
    fetchUserService()
      .then(res => {
 
       this.props.loadUserData(res)
      })
      .catch(err => {
        console.log(err);

      });
  }
  render() {

    return (
      <Router>
        <div>
         <main>
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/search" exact component={Search} />
              {/* <RoutePublic
                isAuthenticated={auth.isAuthenticated}
                path="/"
                exact
                // to={auth.login.userInfo && auth.login.userInfo.role === 'admin' ? '/analytics' : '/central-repository'}
                component={Login}
              /> */}
              <Redirect to="/" />
            </Switch>               
            </main>
      
     
        </div>
      </Router>
    );
  }
}

 

const mapDispatch=(dispatch)=>{
  return {
   
  
    loadUserData:(payload)=>dispatch({type:"LOAD_USER_DATA",payload}),
 

  }

}

export default connect(
  null,
  mapDispatch,
)(App);

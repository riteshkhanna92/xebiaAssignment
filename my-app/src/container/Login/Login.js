import React from "react";
 
import { Form } from "react-bootstrap";
 
import './Login.css'
 
import { connect } from 'react-redux';
class Login extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password:'',
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      }
  componentDidMount() {
   
  }
handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
      });
       
}
handleSubmit(event) {
   const {userData}=this.props
    event.preventDefault();

    let validateUser = (element)=> {
       
        return ((element.name==this.state.username.trim()) 
        &&( element.birth_year==this.state.password.trim()) )
      };
      if(userData)
      {
           
       if(userData.some(validateUser)) 
       {
         let userDetails={};
         userDetails.username=this.state.username
         userDetails.password=this.state.password
        this.props.loginSucess(userDetails);
        this.props.history.push("/search")

       }
       else {
           alert("please try again ")
       }
      }
    

  }
   
  render() {
    
   const {username,password}=this.state
    return (
      <div className="login-page">
    <div className="form">
      {/* <div className="position-relative loginForm"> */}
        <Form onSubmit={this.handleSubmit} id="userForm">
          <div className="text-left">
            <label className="mb-1 login-label-txt">
              UserName
          <sup>*</sup>
            </label>
            <input
              className="login-input"
              type="text"
              name="username"
              value={username}
              placeholder="Email"
              onChange={this.handleChange}
            />
           
          </div>

          <div className="mt-3 text-left">
            <label className="mb-1 login-label-txt">
              Password
          <sup>*</sup>
            </label>
            <input
              className="login-input"
              type={this.props.passwordInputType}
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
           
          </div>

         
          
          <div className="mt-3 text-left">
            <button className="login-btn" type="submit">
              Login
        </button>
          </div>

          
        </Form>
        
      </div>
      </div>
    );
  }
};
const mapStateToProps=(state)=>{
    return {
      
      userData:state.app.usersData.results,
     
    }
    }
    const mapDispatch = (dispatch) => {
        return {
    
    
            loginSucess: (payload) => dispatch({ type: "LOGIN_SUCCESS",payload }),
    
    
        }
    
    }
  
  export default connect(
    mapStateToProps,
    mapDispatch
   
  )(Login);
  

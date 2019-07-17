import React from "react";




import { connect } from 'react-redux';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        };
        this.handleLogout = this.handleLogout.bind(this);

    }


    handleLogout() {

        this.props.logOut();
        this.props.history.push('/')
    }

    render() {


        return (
            <div className="position-relative loginForm">
                <h1>Search</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
};
const mapDispatch = (dispatch) => {
    return {


        logOut: () => dispatch({ type: "LOGOUT_SUCCESS" }),


    }

}
export default connect(
    null,
    mapDispatch

)(Search);

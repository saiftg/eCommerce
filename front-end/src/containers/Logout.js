import React, { Component } from 'react'
// import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap'
// this is a container that knows abotu redux so...
import {connect} from 'react-redux';
// we need bindActionCreators because we have redux actions that will dispatch
import {bindActionCreators} from 'redux';
import LogoutAction from '../actions/LogoutAction';

class Logout extends Component{
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   error: ""
  //   // }
  //   // if we need to use "this" in a non-lifecycle method (one we created 
  //   // such as handleSubmit) we have to bind the method
  // }	

  componentDidMount(){
  	this.props.logoutAction();
  	this.props.history.push('/')
  }


  
	render(){
		console.log(this.props.auth);

		return(
			<div className="register-wrapper">
				SEE YA!!
			</div>
		)
	}
}



function mapDispatchToProps(dispatch){
	return bindActionCreators({
		logoutAction: LogoutAction
	}, dispatch);
}

// export default Login;
export default connect(null, mapDispatchToProps)(Logout);
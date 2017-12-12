import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col, MenuItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthAction from '../actions/AuthAction';

class Register extends Component{
	constructor(){
		super();
		this.state = {

		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event){
		event.preventDefault();
		const name = document.getElementById('name').value;
		this.props.authAction(name);
	
	}



	render(){
		console.log(this.props.auth);
		return(
		 <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl id="name" type="text" name="fullName" placeholder="Full Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" name="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Account Type
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="type" value="customer" disabled />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" name="password" placeholder="Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            City
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="city" placeholder="City" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            State
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="state" placeholder="State" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Sales Rep
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="employee" placeholder="Employee you worked with" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" bsSize="small" type="submit">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            )
	}
}


function mapStateToProps(state){
	return{
		//key is the this.props.key
		//value = property of reducer
		auth: state.auth
		}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		authAction: AuthAction

	}, dispatch)

}

// export default Register
export default connect(mapStateToProps,mapDispatchToProps)(Register);





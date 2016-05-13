import React from 'react';
import store from '../store/Store.js'
import { Jumbotron , Button } from 'react-bootstrap'

//import SectionSummary from '../components/Landing/SectionSummary.js';

export default class Register extends React.Component{
	render(){
		let email, password, phoneNumber;
		return(
			<div class="container">
				<Jumbotron>
					<div class="panel panel-default">
						<div class="panel-heading register-heading">
							Register
						</div>
						<div class="panel-body">
						    <div class="col-lg-6 email-register">
						    	<form class="form-horizontal" onSubmit={ (e)=>{
						    		e.preventDefault();
						    		store.dispatch({
						    			type : 'REGISTER',
						    			email : email.value,
						    			phone :  phoneNumber.value,
						    			password : password.value
						    		})
						    	}}>
								  <div class="form-group">						    
								    <div class="col-sm-12">
								      <input type="email" ref ={ (node) => {
								      		email = node;
								      }} class="form-control" id="inputEmail3" placeholder="Email"/>
								    </div>
								  </div>
								  <div class="form-group">						    
								    <div class="col-sm-12">
								      <input type="number" ref ={ (node) => {
								      		phoneNumber = node;
								      }} class="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
								    </div>
								  </div>
								  <div class="form-group">						    
								    <div class="col-sm-12">
								      <input type="password" ref ={ (node) => {
								      		password = node;
								      }} class="form-control" id="inputPassword3" placeholder="Password"/>
								    </div>
								  </div>						 
								  <div class="form-group">
								    <div class="col-sm-12">
								      <button type="submit" class="btn btn-primary form-control">Register</button>
								    </div>
								  </div>
								</form>
								<div>
									<span>
										<a href="#/login">Login</a>
									</span>
								</div>
							</div>
							<div class="col-lg-6 social-register">
								<form class="form-horizontal">								  
								  <div class="form-group">						    
								    <div class="col-sm-offset-3 col-sm-6">
								      <button type="password" class="btn btn-primary form-control">
								      	<i class="fa fa-facebook" aria-hidden="true"></i>
								      	{'  '}
								      	Facebook
								      </button>
								    </div>
								  </div>
								  <div class="form-group">
								    <div class="col-sm-offset-3 col-sm-6">
								      <button type="submit" class="btn btn-danger form-control">
								      <i class="fa fa-google-plus" aria-hidden="true"></i>
								      	{'  '}
								      	Google
								      </button>
								    </div>
								  </div>
								</form>
							</div>
						</div>
					</div>
	  			</Jumbotron>
	  		</div>			
		)
	}
}
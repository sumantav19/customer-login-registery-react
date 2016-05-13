import React from 'react';
import store from '../store/Store.js'
import { Jumbotron , Button } from 'react-bootstrap'

//import SectionSummary from '../components/Landing/SectionSummary.js';

export default class Login extends React.Component{
	render(){
		let email, password;
		return(
			<div class="container">
				<Jumbotron>
					<div class="panel panel-default">
						<div class="panel-heading login-heading">
							Login
						</div>
						<div class="panel-body">
						    <div class="col-lg-6 email-login">
						    	<form onSubmit={ (e)=>{
						    		e.preventDefault();
						    		store.dispatch({
						    			type : 'LOGIN',
						    			email : email.value,
						    			password : password.value
						    		})
						    	}} class="form-horizontal">
								  <div class="form-group">						    
								    <div class="col-sm-12">
								      <input type="email" ref ={ (node) => {
								      		email = node;
								      }} class="form-control" id="inputEmail3" placeholder="Email"/>
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
								      <button type="submit" class="btn btn-primary form-control">Login</button>
								    </div>
								  </div>
								</form>
								<div>
									<span>
										<a href="#/register">Register</a>
									</span>
								</div>
							</div>
							<div class="col-lg-6 social-login">
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
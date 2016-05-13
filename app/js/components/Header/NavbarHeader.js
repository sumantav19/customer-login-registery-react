import React from 'react'
import { Navbar , FormGroup , FormControl , Button , Nav , NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

const NavbarHeader = (
	props
	) => {        
		let email , password;
        if(props.userAuthenticationData.isLoggedIn && props.userAuthenticationData.isLoggedIn === true){
            return(
                <Navbar> 
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <Navbar.Brand>
                            <a href="#">Temp</a>
                        </Navbar.Brand>
                        
                    </Navbar.Header>
                    <a type="button" class="btn btn-default navbar-btn primary pull-right" href="https://tortalabz.com/">Partner</a> 
                    <Navbar.Collapse>
                        <ul class="nav navbar-nav pull-right">
                            <li class="" >
                                <a href="#/">Home</a>
                            </li>
                            <li class="" >
                                <a href="" onClick={ (e) => {
                                    e.preventDefault();
                                    props.onClickLogout(props.userAuthenticationData.access_token)
                                }}>Logout</a>
                            </li>                            
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
            )

        }
		return(
			<Navbar> 
				<Navbar.Header>
					<Navbar.Toggle />
      				<Navbar.Brand>
        				<a href="#">Temp</a>
      				</Navbar.Brand>
      				
    			</Navbar.Header>
    			<a type="button" class="btn btn-default navbar-btn primary pull-right" href="https://tortalabz.com/">Partner</a> 
    			<Navbar.Collapse>
    				<ul class="nav navbar-nav pull-right">
    					<li class="" >
        					<a href="#/">Home</a>
        				</li>
    					<li class="" >
        					<a href="#/login">Login</a>
        				</li>	
        				<li class="" >
        					<a href="#/register">Register</a>
        				</li>
    				</ul>
    			</Navbar.Collapse>
			</Navbar>
		)
}

export default NavbarHeader
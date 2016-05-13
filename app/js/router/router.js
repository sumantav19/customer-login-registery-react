import React from 'react'
import { render } from 'react-dom'
import { Router , Route , hashHistory , IndexRoute } from 'react-router'

import App from '../containers/App.js'
import Landing from '../containers/Landing.js'
import Welcome from '../containers/Welcome.js'
import Register from '../containers/Register.js'
import Login from '../containers/Login.js'

const AppRouter = () => {
	return (
		<div>
			<Router history = {hashHistory}>
				<Route path="/" component = {App} >
					<IndexRoute component = { Landing }/>
					<Route path="/register" component = { Register } />
					<Route path="/login" component = { Login } />
					<Route path="/user" component = { Welcome } />				
				</Route>
			</Router>
		</div>
	)
}
export default AppRouter;
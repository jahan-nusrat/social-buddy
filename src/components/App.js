import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NavBar from '../pages/NavBar';
import Post from './Post';
import PostInfo from './PostInfo';
import Error from './Error';
function App () {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<NavBar />
						<Post />
					</Route>
					<Route path="/post/:id">
						<NavBar />
						<PostInfo />
					</Route>
					<Route path="*">
						<NavBar />
						<Error />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

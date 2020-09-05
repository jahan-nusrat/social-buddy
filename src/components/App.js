import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NavBar from '../pages/NavBar';
import Post from './Post';
import PostDetails from './PostDetails';
import PostInfo from './PostInfo';
function App () {
	return (
		<Container maxWidth="xl">
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
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function Error () {
	return (
		<div className="container mt-5 py-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="jumbotron jumbotron-fluid">
						<div className="container text-center">
							<h1 className="display-4">Error!!</h1>
							<p className="lead">404 Page Not Found</p>
							<Link to="/">
								<button className="btn border btn-danger">Return Home</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Error;

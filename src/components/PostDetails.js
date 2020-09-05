import React from 'react';
import { Link } from 'react-router-dom';

function PostDetails ({ post }) {
	const { id, title } = post;
	return (
		<div>
			<h1>{title}</h1>
			<Link to={`/post/${id}`}>
				<button>See more</button>
			</Link>
		</div>
	);
}

export default PostDetails;

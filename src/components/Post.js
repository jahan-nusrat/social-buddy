import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import PostDetails from './PostDetails';

function Post () {
	const [ post, setPost ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
			setPost(data);
			setLoading(false);
		});
	}, []);

	let getPosts = post.map((post) => {
		return <PostDetails key={post.id} post={post} />;
	});

	console.log(getPosts);

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div className="container mt-5">
					<h5 className="text-center text-danger">See posts of {post.length} people</h5>
					<div className="row justify-content-center">{getPosts}</div>
				</div>
			)}
		</div>
	);
}

export default Post;

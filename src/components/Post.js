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

	return <div>{loading ? <Loading /> : <li>{getPosts}</li>}</div>;
}

export default Post;

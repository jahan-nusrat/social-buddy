import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Comments from './comments/Comments';
import Loading from './Loading';

function PostInfo () {
	const { id } = useParams();
	const [ user, setUser ] = useState({});
	const [ comment, setComment ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		fetch(url).then((res) => res.json()).then((data) => {
			setUser(data);
		});
	}, []);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res) => res.json()).then((data) => {
			setComment(data);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			<h2>{user.title}</h2>
			<h5>{user.body}</h5>
			<p>comments: {comment.length}</p>
			{loading ? (
				<Loading />
			) : (
				comment.map((item) => {
					return <Comments key={item.id} item={item} />;
				})
			)}
		</div>
	);
}

export default PostInfo;

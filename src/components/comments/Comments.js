import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Avatar } from '@material-ui/core';

function Comments ({ item }) {
	const [ image, setImage ] = useState('');

	useEffect(() => {
		fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => {
			setImage(data.results[0].picture);
		});
	}, []);

	return (
		<div>
			<div>
				<img src={image.large} alt="" />
			</div>
			<p>{item.body}</p>
			<p>{item.email}</p>
			<Avatar alt="Remy Sharp" src={image.medium} />
		</div>
	);
}

export default Comments;

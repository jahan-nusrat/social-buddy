import React from 'react';
import { useParams } from 'react-router-dom';

function PostInfo () {
	const { id } = useParams();
	return <div>Post Info: {id}</div>;
}

export default PostInfo;

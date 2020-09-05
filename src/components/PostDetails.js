import React from 'react';
import { Link } from 'react-router-dom';
import { PostBox, PostImage, PostImgDiv } from '../styles/PostStyle';
import avatar from '../images/avatar.png';

function PostDetails ({ post }) {
	const { id, title } = post;
	return (
		<PostBox className="col-md-10 py-4 post-box">
			<PostImgDiv>
				<PostImage className="img-fluid avatar" alt="Remy Sharp" src={avatar} />
			</PostImgDiv>
			<p>Post Id: {id}</p>
			<h6>{title}</h6>
			<Link to={`/post/${id}`}>
				<button className="btn shadow px-3 mt-3 btn-danger">See Info</button>
			</Link>
		</PostBox>
	);
}

export default PostDetails;

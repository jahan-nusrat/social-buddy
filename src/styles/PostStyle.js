import styled from 'styled-components';

export const PostBox = styled.div`
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.2);
	margin-top: 1.2rem;
	position: relative;
	border-radius: 8px;
	border: 1px solid #ddd;
	background-color: #fff;
`;
export const PostImage = styled.img`width: 60px;`;
export const PostImgDiv = styled.div`
	position: absolute;
	top: -15px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 30%;
`;

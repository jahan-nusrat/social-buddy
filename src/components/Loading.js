import React from 'react';
import loading from '../images/loading-arrow.gif';

function Loading () {
	return (
		<div>
			<h4>Posts data loading...</h4>
			<img src={loading} alt="" />
		</div>
	);
}

export default Loading;

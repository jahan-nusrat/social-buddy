import React from 'react';
import loading from '../images/loading-arrow.gif';

import styled from 'styled-components';

const Loader = styled.div`
	height: 86.7vh;
	padding: 0;
	margin: 0;
`;
const StyledLoad = styled.div`background-color: #bbbbbb;`;

function Loading () {
	return (
		<StyledLoad className="text-center loader">
			<Loader className="row justify-content-center align-items-center">
				<div className="col-md-6">
					<h3>Data loading...</h3>
					<img src={loading} alt="" />
				</div>
			</Loader>
		</StyledLoad>
	);
}

export default Loading;

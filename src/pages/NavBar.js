import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/logo.png';
import { ImgNav } from '../styles/nav';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root      : {
		flexGrow : 1
	},
	title     : {
		flexGrow                     : 1,
		display                      : 'none',
		[theme.breakpoints.up('sm')]: {
			display : 'block'
		}
	},
	inputRoot : {
		color : 'inherit'
	}
}));

export default function NavBar () {
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ position: 'sticky', top: '0', zIndex: '11' }}>
			<AppBar position="static" style={{ backgroundColor: '#02393E' }}>
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						<Link to="/">
							<ImgNav src={logo} alt="" />
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

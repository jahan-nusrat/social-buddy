import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Avatar, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root   : {
		width           : '100%',
		maxWidth        : '36ch',
		backgroundColor : theme.palette.background.paper
	},
	inline : {
		display : 'inline'
	}
}));

function Comments ({ item }) {
	const [ image, setImage ] = useState({
		name    : '',
		picture : '',
		email   : ''
	});
	const classes = useStyles();
	useEffect(() => {
		fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => {
			setImage({
				name    : data.results[0].name,
				picture : data.results[0].picture,
				email   : data.results[0].email
			});
		});
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<List className="col-md-6 pt-0" style={{ backgroundColor: '#fff' }}>
					<Divider component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src={image.picture.medium} />
						</ListItemAvatar>
						<ListItemText
							primary={image.name.title + ' ' + image.name.first + ' ' + image.name.last}
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										{image.email}
									</Typography>
									<div>{item.body}</div>
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</div>
		</div>
	);
}

export default Comments;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Comments from './comments/Comments';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root  : {
		maxWidth : 600
	},
	media : {
		height       : 100,
		width        : 100,
		borderRadius : 50,
		position     : 'absolute',
		left         : '50%',
		transform    : 'translateX(-50%)'
	}
});

function PostInfo () {
	const { id } = useParams();
	const [ user, setUser ] = useState({});
	const [ comment, setComment ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const classes = useStyles();
	const [ image, setImage ] = useState('');

	useEffect(() => {
		fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => {
			setImage(data.results[0].picture);
		});
	}, []);

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
		<div className="container mt-4">
			<div className="row justify-content-center">
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia className={classes.media} image={image.medium} title="Contemplative Reptile" />
						<CardContent style={{ marginTop: '6rem' }}>
							<Typography gutterBottom variant="h5" component="h2">
								{user.title}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{user.body}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</Card>
			</div>

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

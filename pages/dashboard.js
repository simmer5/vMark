import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'
import VideoCard from '../components/Card'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		//padding: theme.spacing(2),
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	button: {
		alignSelf: 'flex-end',
		marginTop: theme.spacing(8),
		boxShadow:
			'0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
	},

	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
}))

const Dashboard = () => {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>Dashbord | Video Note App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container className={classes.main} component='main' maxWidth='xl'>
				<Link href='/addnew'>
					<Button className={classes.button} variant='outlined' color='primary'>
						Add new video mark
					</Button>
				</Link>
				<CssBaseline />

				<Paper className={classes.paper} elevation={5}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Video marks
					</Typography>
					<Container className={classes.container}>
						<VideoCard id='V3XTz6xg9WE' start='120' />
						<VideoCard id='V3XTz6xg9WE' start='120' />
						<VideoCard id='V3XTz6xg9WE' start='120' />
						<VideoCard id='V3XTz6xg9WE' start='120' />
						<VideoCard id='V3XTz6xg9WE' start='120' />
					</Container>
				</Paper>
				<Box mt={8}>
					<Footer />
				</Box>
			</Container>
		</>
	)
}

export default Dashboard

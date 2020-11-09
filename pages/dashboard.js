import Head from 'next/head'
import Link from 'next/link'
import cookie from 'cookie'
import { useRouter } from 'next/router'

import Footer from '../components/Footer'
import VideoCard from '../components/Card'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'

//import dbConnect from '../../../utils/dbConnect'

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
		marginLeft: theme.spacing(2),
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
	margin: {
		margin: theme.spacing(4),
		width: '60%',
		boxShadow:
			'0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
	},
	btnBox: {
		display: 'inline-flex',
		justifyContent: 'flex-end',
	},
}))

const Dashboard = ({ data }) => {
	const classes = useStyles()
	const router = useRouter()

	console.log('Logas is propsu cia', data.data[0])

	const handelLogOut = async e => {
		const res = await fetch(`http://localhost:3000/api/logout`)
		if (res.ok) router.push('/')
	}

	return (
		<>
			<Head>
				<title>Dashbord | Video Note App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container className={classes.main} component='main' maxWidth='xl'>
				{`${data.data[0].title}`}
				<Box className={classes.btnBox}>
					<Link href='/addnew'>
						<Button
							className={classes.button}
							variant='outlined'
							color='primary'
						>
							Add new video mark
						</Button>
					</Link>
					<Button
						className={classes.button}
						onClick={e => handelLogOut()}
						variant='outlined'
						color='primary'
					>
						Logout
					</Button>
				</Box>

				<CssBaseline />

				<Paper className={classes.paper} elevation={5}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Video marks
					</Typography>

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<InputLabel htmlFor='outlined-adornment-amount'>Search</InputLabel>
						<OutlinedInput
							id='outlined-adornment-amount'
							// value={values.amount}
							// onChange={handleChange('amount')}
							endAdornment={
								<InputAdornment position='start'>
									<IconButton
										type='submit'
										className={classes.iconButton}
										aria-label='search'
									>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
							labelWidth={60}
						/>
					</FormControl>

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
export async function getServerSideProps(context) {
	if (!context.req.headers.cookie) {
		context.res.writeHead(301, {
			Location: 'http://localhost:3000/login',
		})
		context.res.end()
	}
	const cookies = await cookie.parse(context.req.headers.cookie)
	const res = await fetch(`http://localhost:3000/api/videonotes`, {
		headers: {
			cookie: 'auth=' + cookies.auth,
		},
	})

	const data = await res.json()
	return {
		props: { data },
	}
}
export default Dashboard

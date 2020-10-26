//import Head from "next/head";
//import styles from "../styles/Home.module.css";
//import Footer from "../components/Footer";

import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		paddingLeft: 0,
		paddingRight: 0,
	},
	link: {
		flexGrow: 1,
		marginRight: theme.spacing(2),
	},
	timestamp: {
		flexGrow: 0,
	},
}))

export default function SignIn() {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>Add new mark | Video Note App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container component='main' maxWidth='md'>
				<CssBaseline />

				<Paper className={classes.paper} elevation={5}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Add new video mark
					</Typography>
					<form
						className={classes.form}
						onSubmit={e => {
							e.preventDefault()
							console.log('Form submited')
						}}
						noValidate
					>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							label='Title'
							name='title'
							autoComplete='title'
							autoFocus
							className={classes.title}
						/>
						<Container className={classes.container}>
							<TextField
								variant='outlined'
								margin='normal'
								required
								label='Link'
								name='link'
								className={classes.link}
							/>
							<TextField
								variant='outlined'
								margin='normal'
								// name='time stamp'
								label='Time stamp'
								className={classes.timestamp}
							/>
						</Container>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							label='Description'
							name='description'
							autoComplete='description'
							autoFocus
							className={classes.description}
							multiline='true'
							rows='6'
						/>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							name='tags'
							label='Tags separated by comma'
							className={classes.tags}
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Add new mark
						</Button>
					</form>
				</Paper>
				<Box mt={8}>
					<Footer />
				</Box>
			</Container>
		</>
	)
}

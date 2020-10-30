import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

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
}))

export default function SignIn() {
	const classes = useStyles()

	const [FormData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = FormData

	const onSubmit = e => {
		e.preventDefault()
		console.log('=====Login forma submitinta====', FormData)
	}
	const onChange = e => {
		setFormData({
			...FormData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<Head>
				<title>Sign In | Video Note App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
						<TextField
							value={email}
							onChange={e => onChange(e)}
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							value={password}
							onChange={e => onChange(e)}
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									<a>Forgot password?</a>
								</Link>
							</Grid>
							<Grid item>
								<Link href='/signup' variant='body2'>
									<a>{"Don't have an account? Sign Up"}</a>
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Footer />
				</Box>
			</Container>
		</>
	)
}

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

import fetch from 'isomorphic-unfetch'
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
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
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
	const router = useRouter()

	const [FormData, setFormData] = useState({
		email: '',
		password: '',
	})
	const [message, setMessage] = useState('')

	const { email, password } = FormData

	const handleLogin = async e => {
		e.preventDefault()
		const resp = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
		console.log('ka resp rodo', resp)
		if (resp.ok) router.push('/dashboard')
		const json = await resp.json()

		console.log('Logas=======1=1=11', json.message)
		setMessage(json.message)
		setFormData({
			email: '',
			password: '',
		})
	}

	// const handleLogin = useCallback(e => {
	// 	e.preventDefault()

	// 	fetch('http://localhost:3000/api/login', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({
	// 			email: email,
	// 			password: password,
	// 		}),
	// 	}).then(res => {
	// 		// Do a fast client-side transition to the already prefetched dashboard page
	// 		console.log('ka resp rodo', res)
	// 		if (res.ok) router.push('/dashboard')
	// 	})
	// }, [])

	useEffect(() => {
		// Prefetch the dashboard page
		router.prefetch('/dashboard')
	}, [])

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
					{JSON.stringify(message)}
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleLogin}>
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

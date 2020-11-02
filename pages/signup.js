import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function SignUp() {
	const classes = useStyles()

	const [FormData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})
	const [message, setMessage] = useState('')

	const { name, email, password } = FormData

	const handleSignup = async e => {
		e.preventDefault()
		const resp = await fetch('http://localhost:3000/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password,
			}),
		})
		const json = await resp.json()
		console.log('Logas=======1=1=11', json)
		setMessage(json)
		setFormData({
			name: '',
			email: '',
			password: '',
		})
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
				<title>SignUP | Video Note App </title>
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
						Sign up
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSignup}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<TextField
									value={name}
									onChange={e => onChange(e)}
									autoComplete='fname'
									name='name'
									variant='outlined'
									required
									fullWidth
									id='name'
									label='Name'
									autoFocus
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									value={email}
									onChange={e => onChange(e)}
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={password}
									onChange={e => onChange(e)}
									variant='outlined'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link href='/login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={5}>
					<Footer />
				</Box>
			</Container>
		</>
	)
}

//import Head from "next/head";
//import styles from "../styles/Home.module.css";
//import Footer from "../components/Footer";

import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

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
		marginTop: theme.spacing(2),
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
	button: {
		marginTop: theme.spacing(8),
		alignSelf: 'flex-end',
		boxShadow:
			'0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
	},
}))

export default function SignIn() {
	const classes = useStyles()
	const router = useRouter()

	const [newData, setNewData] = useState({
		title: '',
		link: '',
		timestamp: '',
		description: '',
		//tags: [],
	})
	const [message, setMessage] = useState('')
	const { title, link, timestamp, description } = newData

	const onChange = e => {
		setNewData({
			...newData,
			[e.target.name]: e.target.value,
		})
	}
	const handleAddNew = async e => {
		e.preventDefault()
		console.log(newData)
		const resp = await fetch('http://localhost:3000/api/videonotes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				link: link,
				timestamp: timestamp,
				description: description,
			}),
		})
		console.log('ka resp rodo', resp)
		if (resp.ok) router.push('/dashboard')
		const json = await resp.json()

		console.log('Logas=======1=1=11', json.message)
		setMessage(json.message)
		setNewData({
			title: '',
			link: '',
			timestamp: 0,
			description: '',
		})
	}

	return (
		<>
			<Head>
				<title>Add new mark | Video Note App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container component='main' maxWidth='md'>
				<Link href='/dashboard'>
					<Button className={classes.button} variant='outlined' color='primary'>
						Back
					</Button>
				</Link>

				<CssBaseline />

				<Paper className={classes.paper} elevation={5}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Add new video mark
					</Typography>
					{`${message}`}
					<form
						className={classes.form}
						onSubmit={e => handleAddNew(e)}
						noValidate
					>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							onChange={e => onChange(e)}
							label='Title'
							name='title'
							value={title}
							autoComplete='title'
							autoFocus
							className={classes.title}
						/>
						<Container className={classes.container}>
							<TextField
								variant='outlined'
								margin='normal'
								required
								onChange={e => onChange(e)}
								label='Link'
								name='link'
								value={link}
								className={classes.link}
							/>
							<TextField
								variant='outlined'
								margin='normal'
								onChange={e => onChange(e)}
								name='timestamp'
								value={timestamp}
								label='Time stamp'
								className={classes.timestamp}
							/>
						</Container>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							label='Description'
							onChange={e => onChange(e)}
							name='description'
							value={description}
							autoComplete='description'
							autoFocus
							className={classes.description}
							multiline={true}
							rows='6'
						/>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							name='tags'
							// onChange={e => onChange(e)}
							// value={tags}
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

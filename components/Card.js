import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
	paper: {
		marginBottom: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	videoFrame: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	accordion: {
		width: '100%',
	},
	title: {
		alignSelf: 'flex-start',
	},
	timeStamp: {
		alignSelf: 'flex-start',
	},
	descriptionContainer: {
		maxWidth: 'fit-content',
	},
}))

const Card = ({
	id,
	start = '0',
	description = 'No description',
	timeStamp = '0',
}) => {
	const classes = useStyles()
	return (
		<Paper className={classes.paper} elevation={5}>
			<iframe
				className={classes.videoFrame}
				type='text/html'
				//width='auto'
				//height='auto'
				// src='https://www.youtube.com/embed/M7lc1UVf-VE?start=456'
				src={`https://www.youtube.com/embed/${id}?start=${start}`}
				frameBorder='0'
				allowfullscreen='true'
			/>
			<Divider
				style={{ marginTop: '1rem', height: 1 }}
				variant='middle'
				flexItem='true'
				component='hr'
				orientation='horizontal'
			/>
			<Typography className={classes.title} variant='h4'>
				Title
			</Typography>
			<Typography
				variant='body1'
				gutterBottom='true'
				className={classes.timeStamp}
			>
				{timeStamp}
			</Typography>
			<Accordion className={classes.accordion}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography className={classes.heading}>Description</Typography>
				</AccordionSummary>
				<AccordionDetails className={classes.descriptionContainer}>
					<Typography>{description}</Typography>
				</AccordionDetails>
			</Accordion>
		</Paper>
	)
}

export default Card

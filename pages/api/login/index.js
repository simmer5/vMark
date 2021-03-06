const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
import cookie from 'cookie'

import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

export default async (req, res) => {
	const { method } = req

	await dbConnect()

	switch (method) {
		case 'POST':
			try {
				const body = req.body
				console.log('Cia req bodis', body)
				const user = await User.findOne({ email: body.email })
				console.log('Cia ar useris surastas', user)
				const passwordCorrect =
					user === null
						? false
						: await bcrypt.compare(body.password, user.password)
				console.log('Cia ar passwordas geras', passwordCorrect)
				if (!(user && passwordCorrect)) {
					return res.status(401).json({
						error: 'invalid username or password',
					})
				}
				const userForToken = {
					email: user.email,
					id: user._id,
				}
				console.log('Cia user for token', userForToken)
				const token = jwt.sign(userForToken, process.env.SECRET, {
					expiresIn: '1h',
				})
				console.log('Cia user tokenas', token)
				res.setHeader(
					'Set-Cookie',
					cookie.serialize('auth', token, {
						httpOnly: true,
						secure: process.env.NODE_ENV !== 'development',
						sameSite: 'strict',
						maxAge: 3600,
						path: '/',
					})
				)
				res.status(200).json({
					tokenas: token,
					message: 'Wellcom back to the app.',
					email: user.email,
					name: user.name,
				})
			} catch (error) {
				console.log('+++++ error ++++++:', error)
				res.status(400).json({
					success: false,
					message: 'Something went wrong with login.',
				})
			}
			break
		default:
			res.status(400).json({ success: false, message: 'Something went wrong!' })
			break
	}
}

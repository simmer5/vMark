const bcrypt = require('bcrypt')
import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

export default async (req, res) => {
	const { method } = req

	await dbConnect()

	switch (method) {
		case 'POST':
			try {
				const body = req.body
				const saltRounds = 10
				const user = await User.findOne({ email: body.email })
				console.log('Cia ar useris surastas', user)

				if (user === null) {
					const passwordHash = await bcrypt.hash(body.password, saltRounds)
					const withHashedPassword = { ...body, password: passwordHash }

					const user = await User.create(withHashedPassword)
					console.log('Cia naujas obj su hash pasvordu', withHashedPassword)
					res.status(201).json({ success: true, data: user })
				} else {
					res.status(400).json({
						success: false,
						message: 'User alleredy exist! Use another email.',
					})
				}
			} catch (error) {
				res
					.status(400)
					.json({ success: false, message: 'Something vent wrong.' })
			}
			break
		default:
			res
				.status(405)
				.json({ success: false, message: 'SignUp suports only POST method!' })
			break
	}
}

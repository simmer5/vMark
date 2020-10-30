import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import Note from '../../../models/VideoNote'
const jwt = require('jsonwebtoken')

dbConnect()

export default async (req, res) => {
	const { method } = req
	console.log('+++++++++++++++++++++rekvesto headeris=====', req.cookies.auth)

	const authenticatedUser = req => {
		if (req.cookies.auth === 'undefined') {
			res.status(401).json({ message: 'Sorry you are not authenticated' })
		} else {
			const token = req.cookies.auth
			const decodedToken = jwt.verify(token, process.env.SECRET)
			console.log('Cia decoded TOKEN Is cookio: ', decodedToken)
			if (!token || !decodedToken.id) {
				return res.status(401).json({ error: 'Token missing or invalid' })
			}
			return decodedToken.id
		}
	}

	switch (method) {
		case 'GET':
			try {
				const user = authenticatedUser(req)
				console.log('Ar pareina useris??????????', user)
				const notes = await Note.find({ user: user })
				res.status(200).json({ success: true, data: notes })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		case 'POST':
			try {
				const body = req.body
				console.log('Cia gautas body', body)
				const user = await User.findById(body.userId)
				console.log('user from note ruter', user)

				const updatedNote = { ...body, user: user._id }
				console.log('Cia updated note jau', updatedNote._id)
				const note = await Note.create(updatedNote)

				user.notes = user.notes.concat(note._id)
				await user.save()

				res.status(201).json({ success: true, data: note })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		default:
			res.status(400).json({ success: false })
			break
	}
}

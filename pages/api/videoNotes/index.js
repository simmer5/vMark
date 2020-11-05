import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import Note from '../../../models/VideoNote'

import { authenticatedUser } from '../../../utils/authUser'

dbConnect()

export default async (req, res) => {
	const { method } = req
	console.log('+++++++++++++++++++++rekvesto headeris=====', req.cookies.auth)
	const authUser = await authenticatedUser(req)
	switch (method) {
		case 'GET':
			try {
				console.log('Ar pareina useris??????????', authUser)
				const notes = await Note.find({ user: authUser })
				res.status(200).json({ success: true, data: notes })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		case 'POST':
			try {
				const body = req.body
				console.log('Cia gautas body', body)
				const user = await User.findById(authUser)
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

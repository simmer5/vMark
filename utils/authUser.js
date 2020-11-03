const jwt = require('jsonwebtoken')

export const authenticatedUser = async req => {
	if (req.cookies.auth === 'undefined') {
		res.status(401).json({ message: 'Sorry you are not authenticated' })
		return
	} else {
		const token = await req.cookies.auth
		const decodedToken = jwt.verify(token, process.env.SECRET)
		console.log('Cia decoded TOKEN Is cookio: ', decodedToken)
		if (!token || !decodedToken.id) {
			return res.status(401).json({ error: 'Token missing or invalid' })
		}
		return decodedToken.id
	}
}
//export default authenticatedUser

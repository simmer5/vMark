const jwt = require('jsonwebtoken')

export const authenticatedUser = async req => {
	const token = await req.cookies.auth
	const decodedToken = jwt.verify(token, process.env.SECRET)
	console.log(
		'Cia decoded TOKEN Is authenticatedUser funkcijos: ',
		decodedToken
	)

	return decodedToken.id
}

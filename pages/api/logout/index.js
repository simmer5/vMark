import cookie from 'cookie'

export default async (req, res) => {
	/* remove cookies from request header */
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('auth', '', {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
			maxAge: -1,
			path: '/',
		})
	)

	res.writeHead(302, { Location: '/' })
	res.end()
}

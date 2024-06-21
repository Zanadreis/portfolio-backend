module.exports = async (req, res, next) => {
    const authHelper = require('../helpers/authHelper')
    const token = req.headers['x-access-token']

    const unauthenticatedRoutes = [
        '/health',
        '/auth/signin',
        '/auth/login',
        '/docs'
    ];

    if(unauthenticatedRoutes.some(route => req.path.startsWith(route))) return next();
    if(!token) return res.status(401).send({message: "No token was provided"});
    
    // Autentication should be done in a different API with reddis for better performance
    // axios.post(`${authUrl}/verify`, { token })
    const auth = authHelper.verify(token)
    
    if(!auth) return res.status(401).send({message: "Unauthorized"});
    req.body._company = user.company;
    req.body._role = user.role;
    next()
}
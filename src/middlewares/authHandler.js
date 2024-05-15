module.exports = async (req, res, next) => {
    const axios = require('axios');
    const authUrl = process.env.AUTH_URL;
    const {token} = req.headers['x-access-token']

    const unauthenticatedRoutes = [
        '/health',
    ];

    if(unauthenticatedRoutes.includes(req.path)) return next();

    axios.post(`${authUrl}/verify`, { token })
    .then(function (response) {
        const {auth, user} = response.data;
        if(!auth) return res.status(401).send({message: "Unauthorized"});
        req.body._company = user.company;
        req.body._role = user.role;
        return next()
    })
    .catch(function (error) {
        console.log(error);
        return res.status(404).send({message: "Failed to comunicate with authentication service"});
    });
}
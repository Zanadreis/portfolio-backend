const jwt = require('jsonwebtoken')

module.exports = class authHelper {

    static async verify(token) {
        return jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) return { auth: false}
            const {user} = decoded
            return { auth: true, user: user }
        })
    }
    
    static async login(user){
        const token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: '24h'
        })
        return { auth: true, token: token}
    }
    
    static async logout(req, res){
        return { auth: false, token: null, refreshToken: null } //TO DO! Needs Redis
    }
};  

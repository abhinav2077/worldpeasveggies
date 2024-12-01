const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req,res,next) => {
    const auth = req.headers['autherization'];
    if(!auth){
        return res.status(403)
        .json({message:'Unautherized! Jwt token is required!'});
    }
    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401)
        .json({message:'Unautherized! Jwt token is invalid or expired!'});
    }
}

module.exports = ensureAuthenticated;

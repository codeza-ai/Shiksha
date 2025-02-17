
const verifyToken = (req, res, next)=>{
    const sessionToken = req.body.sessionToken;
    const userId = req.body.userId;

    if(!sessionToken){
        return res.status(403).json({message: 'Session timeout'});
    }
    if(!userId){
        return res.status(403).json({message: 'Invalid user'});
    }
    next();
}
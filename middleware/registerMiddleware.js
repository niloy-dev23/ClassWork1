const registerMiddleware = (req, res, next)=>{
    const {password} = req.body
    if(password==12345678){
        next()
    }
    else{
        return res.status(401).json({
            success:false,
            message:"Incorrect Password"
        })
    }
}

module.exports = registerMiddleware
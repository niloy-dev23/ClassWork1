const userModel = require('../models/userModel')

const registration = async (req, res)=>{
    const {username, email} = req.body
    if(!username || !email){
        return res.status(400).json({
            success:false,
            message:"Please Provide All the Required fields"
        })
    }
    const user = new userModel({
        username:username,
        email:email
    })
    await user.save()
    res.status(201).json({
        success:true,
        message:"User has been registered sucessfully",
        data:user
    })
}

module.exports = registration
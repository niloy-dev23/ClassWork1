const userModel = require('../models/userModel')

const getAllUsers = async (req, res)=>{
    const allUsers = await userModel.find()
    res.status(201).json({
        success:false,
        message:'All Users fetched successfully',
        users: allUsers
    })
}

module.exports = getAllUsers
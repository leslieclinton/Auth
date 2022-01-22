import User from "../models/UserSchema.js"
import ErrorResponse from "../utils/ErrorResponse.js";

export const Register = async(req, res, next)=>{

    const {username, email, password} = req.body;

    try {
        const match =  await User.findOne({email});


        if(match){
            return next(new ErrorResponse('This user already Exist', 500))
        }

        const user = await User.create({username, email, password});
        res.status(201).json({
            success: true,
            // user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
        



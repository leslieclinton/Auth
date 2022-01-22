import  Mongoose  from "mongoose";

const UserSchema  = new Mongoose.Schema({
    username:{
        type:String,
        unique:[true, 'Username already exist'],
        required: [true, 'Enter a username']
    },

    email:{
        type: String,
        required: [true, 'Enter an Email Address'],
        unique:[true, 'Email already exist'],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],

    },
    password: {
        type: String,
        minLength: [6, 'Password should be more than 6 letters'],
        required: [true, 'please enter a password'],
        select : false
    },

    resetPasswordToken: String,
    resetPasswordTokenExpires: Date,
    

}, {timestamps: true})


const User = Mongoose.model('User', UserSchema);

export default User;
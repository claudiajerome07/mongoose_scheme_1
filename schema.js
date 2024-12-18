const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roles:{
        type:[String]
    },
    profileFields:{
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        age:{
            type:Number
        }
    },
    login:{
        type: Date
    }
})

module.exports=mongoose.model('User',UserSchema)
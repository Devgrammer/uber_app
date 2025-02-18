const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const captainModelSchema = new mongoose.Schema({
     fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3, 'First name amust be atleast 3 chracters.']

        },
        lastname: {
            type: String,
            required: false,
            minlength: [3, 'Last name amust be atleast 3 chracters.']

        }
     },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Email must be atleast 3 chracters"]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3, "Color must be atleast 3 characters"]
        },
        plate:{
            type: String,
            required: true,
            minlength:[3, "Color must be atleast 3 characters"]
        },
        capacity:{
            type: Number,
            required: true,
            minlength:[1, "Color must be atleast 1 characters"]
        },
        vehicleType:{
            type: String,
            required: true,
            enum:['car', 'motorcycle', 'auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
}
);


 captainModelSchema.methods.generateAuthToken = function(){ 
     const token = jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn:'24h'});
     return token;
};

captainModelSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);

};

captainModelSchema.statics.hashedPassword =async(password)=>{
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain',captainModelSchema);

module.exports = captainModel;
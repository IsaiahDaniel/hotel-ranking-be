import { Schema, model } from "mongoose";
import bcryt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Email is not valid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

userSchema.pre("save", async function(next) {

    if(!this.isModified("password")){
        next();
    }

    const salt = await bcryt.genSalt(10);
    this.password = await bcryt.hash(this.password, salt);
    next();
});

userSchema.methods.sendToken = function(id){
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
}

userSchema.methods.comparePassword = async function(password){
    return await bcryt.compare(password, this.password);
}

const User = model("user", userSchema);

export default User;
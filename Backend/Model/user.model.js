
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Optional: ensures email uniqueness
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export default User;

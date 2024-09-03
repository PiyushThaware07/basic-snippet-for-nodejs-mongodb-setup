const mongoose = require("mongoose");

const modelName = "User";
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    }
}, {
    collection: modelName
})

const UserModel = mongoose.model(modelName, UserSchema);

module.exports = UserModel;
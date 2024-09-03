const UserModel = require("./models");

exports.getAll = async function (req, res) {
    const users = await UserModel.find();
    return res.status(200).json({
        status: "success",
        message: users
    })
}


exports.getById = async function (req, res) {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    return res.status(200).json({
        status: "success",
        message: user
    })
}


exports.create = async function (req, res) {
    const payload = req.body;
    const newUser = await UserModel(payload);
    const savedUser = await newUser.save();
    return res.status(201).json({
        status: "success",
        message: savedUser
    })
}


exports.updateById = async function (req, res) {
    const { id } = req.params;
    const payload = req.body;
    const updatedResult = await UserModel.findByIdAndUpdate(id, payload);
    if (!updatedResult) {
        return res.status(400).json({
            status: "failed",
            message: "failed to update"
        })
    }
    return res.status(200).json({
        status: "success",
        message: updatedResult
    })
}


exports.deleteById = async function (req, res) {
    const { id } = req.params;
    const deletedResult = await UserModel.findByIdAndDelete(id);
    if (!deletedResult) {
        return res.status(404).json({
            status: "failed",
            message: "User not found"
        });
    }
    return res.status(200).json({
        status: "success",
        message: "User successfully deleted"
    });
}
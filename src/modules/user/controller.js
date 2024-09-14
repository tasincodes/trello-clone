const express = require("express");
const router = express.Router();
const userService = require('../user/service');

const userController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const { success, data, error } = await userService.createUser(username, email, password);
        if (success) {
            res.status(200).json({
                message: "user creation success",
                user: data
            })
        }
        else {
            res.status(400).json({
                message: "user creation failed",
                error: error
            })
        }

    }
    catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

const updateUserControlller = async (req, res) => {
    const userid = req.params;

}

router.post('/createUser', userController);



module.exports = router;

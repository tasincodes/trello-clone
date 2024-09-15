const express = require("express");
const router = express.Router();

const boardService = require("../board/service");
const authMiddleware = require("../../middleswares/authMiddleware");



const boardCreateController = async (req, res) => {
    const { name } = req.body;
    const userId = req.user;
    try {
        const newBoard = await boardService.createBoard(name, userId)
        res.status(200).json({ newBoard: newBoard })

    } catch (error) {
        console.log(error);
        res.status(404).json({ error: "Internal server error" })

    }
}

router.post('/createBoard', authMiddleware, boardCreateController);

module.exports = router;
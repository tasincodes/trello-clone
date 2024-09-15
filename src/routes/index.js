const express = require('express');
const router = express.Router();



const userRoute=require('../modules/user/controller');
const boardRoute =require('../modules/board/controller');


router.use('/user',userRoute);
router.use('/board',boardRoute);

module.exports=router;

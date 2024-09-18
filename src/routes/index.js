const express = require('express');
const router = express.Router();



const userRoute=require('../modules/user/controller');
const boardRoute =require('../modules/board/controller');
const taskRoute = require('../modules/tasks/controller');


router.use('/user',userRoute);
router.use('/board',boardRoute);
router.use('/task',taskRoute);


module.exports=router;

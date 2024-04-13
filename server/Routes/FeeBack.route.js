

import express from 'express';
import { feedBackPost,getFeedback } from "../Controllers/Feedback.controller.js";
let router=express.Router();
import { verifyToken } from "../Middleware/verifyToken.js";
router.post('/:id',feedBackPost);

router.get('/:id',getFeedback);



export default router;

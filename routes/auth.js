import express from 'express';
import { Register } from '../controllers/user.js';

const router = express.Router()

router.route('/register').get(Register)


export default router;
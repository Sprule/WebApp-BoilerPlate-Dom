import express from 'express'
import { UserModel } from '../models/user.model'
const router = express.Router()

// GET all Users
router.get('/', async (req, res, next) => {
  let users = await UserModel.find().exec()
  res.json({users})
});

export default router

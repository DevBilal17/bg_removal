import express from 'express'
import { clerkWebHooks } from '../controllers/userController.js';

const router = express.Router();

router.post("/webhooks",clerkWebHooks)
router.get("/",(req,res)=>{
      res.send("Users Api is working")
})



export default router
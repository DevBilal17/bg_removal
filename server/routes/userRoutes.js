import express from 'express'
import { clerkWebHooks } from '../controllers/userController.js';
import bodyParser from 'body-parser';
const router = express.Router();

router.post("/webhooks",bodyParser.raw({ type: "application/json" }),clerkWebHooks)
router.get("/",(req,res)=>{
      res.send("Users Api is working")
})



export default router
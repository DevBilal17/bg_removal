import { Webhook } from "svix"
import { USER } from "../models/userModel.js"


// api/user/webhooks


export const clerkWebHooks = async (req,res)=>{
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
         // ✅ raw buffer → string
    const payload = req.body instanceof Buffer ? req.body.toString("utf8") : req.body;

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"],
    };
        const {data,type} = wh.verify(payload, headers);

        // const {data,type} = req.body
        switch (type){
            case "user.created": {
           
                const user = {
                    clerkId : data.id,
                    email : data.email_addresses[0].email_address,
                    photo : data.image_url,
                    firstName : data.first_name,
                    lastName : data.last_name
                }

                await USER.create(user);
                res.json({})
                
                break;
            }

            case "user.updated": {
           const user = {
                    
                    email : data.email_addresses[0].email_address,
                    photo : data.image_url,
                    firstName : data.first_name,
                    lastName : data.last_name
                }

                await USER.findOneAndUpdate({clerkId : data.id},user)

                res.json({})
                break;
            }

            case "user.deleted": {
           
                await USER.findOneAndDelete({clerkId : data.id})

                res.json({})
                break;
            }


            default : 
                break;
        }
    } catch (error) {
        console.log(error.message)
        res.json({
            success: false,
            message : error.message
        })
    }
}
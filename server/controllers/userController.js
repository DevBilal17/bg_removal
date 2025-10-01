import { Webhook } from "svix"


// api/user/webhooks


export const clerkWebHooks = async (req,res)=>{
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-signature":req.headers["svix-signature"],
            "svix-timestamp":req.headers["svix-timestamp"]
        })

        const {data,type} = req.body
        switch (type){
            case "user.created": {
           
                console.log(data)
                break;
            }

            case "user.updated": {
           
                break;
            }

            case "user.deleted": {
           
                break;
            }


            default : 
                break;
        }
    } catch (error) {
        
    }
}
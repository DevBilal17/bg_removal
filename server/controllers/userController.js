import { Webhook } from "svix";
import { USER } from "../models/userModel.js";

export const clerkWebHooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
console.log("✅ Clerk webhook received:", req.headers["svix-id"]);

    const payload = whook.verify(req.body.toString('utf-8'), {
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"],
    });

    const { data, type } = JSON.parse(payload);
console.log("📩 Webhook type:", type);

    switch (type) {
      case "user.created":
        await USER.create({
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        });
        break;

      case "user.updated":
        await USER.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses[0].email_address,
            photo: data.image_url,
            firstName: data.first_name,
            lastName: data.last_name,
          }
        );
        break;

      case "user.deleted":
        await USER.findOneAndDelete({ clerkId: data.id });
        break;

      default:
        break;
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

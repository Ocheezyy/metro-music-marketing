import { z } from "zod";
import zPhone from "@/lib/z-phone";

const contactSchema = z.object({
    name: z.string().min(8, {
        message: "Name is required"
    }).max(50),
    email: z.string().email(),
    phone: zPhone,
    city: z.string().min(2, {
        message: "City is required"
    }).max(40),
    reasonForWork: z.string().min(2, {
        message: "Reason is required"
    }).max(200),
});

export default contactSchema;
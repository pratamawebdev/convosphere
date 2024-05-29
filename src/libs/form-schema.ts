import { DATA_GENDER, DATA_STATUS } from "@/constants";
import { z } from "zod";

export const userFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name cannot be empty" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email cannot be empty" }),
  status: z.enum(DATA_STATUS, { required_error: "Status is required" }),
  gender: z.enum(DATA_GENDER, { required_error: "Gender is required" }),
});

export type UserFormType = z.infer<typeof userFormSchema>;

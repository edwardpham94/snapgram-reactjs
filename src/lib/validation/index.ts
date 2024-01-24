import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  username: z.string().min(2, { message: "Username is too short" }),
  email: z.string().min(2, { message: "Email is too short" }),
  password: z.string().min(2, { message: "Password is too short" }),
});

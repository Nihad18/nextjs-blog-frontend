import { z } from "zod";

export const LoginSchema = z.object({
  // defines a required field called email.
  // we use the built-in email validator from zod
  email: z.string().email("Please enter a valid email"),
  // defines a required field called message with length constraints of 7-30 characters.
  password: z
    .string()
    .min(7)
    .max(30)
    .refine(
      (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,30}$/.test(value),
      {
        message:
          "Password too weak , password must have at least 1 uppercase,1 lowercase and 1 special character",
      }
    ),
});
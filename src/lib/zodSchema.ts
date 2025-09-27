import z from "zod";

export const signUpSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
  username: z
    .string("Please Enter a Valid Name")
    .min(4, "Password must be atleast 4 Characters")
    .optional(),
  picture: z.file().optional(),
});

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
});

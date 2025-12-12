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
  // picture: z
  //   .file()
  //   .refine((file) => file.size < 5000000, {
  //     message: "Image can't be bigger than 5MB",
  //   })
  //   .refine(
  //     (file) => ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
  //     { message: "Image format must be either jpg, jpeg or png" }
  //   ),
});

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string("Please Enter a Valid Password!")
    .min(4, "Password must be atleast 4 Characters"),
});

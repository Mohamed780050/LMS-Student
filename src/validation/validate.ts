import z from "zod";
const loginValidation = z.object({
  identifier: z
    .string()
    .min(1, { message: "Field is empty" })
    .or(z.string().email().min(1, { message: "Field is empty" })),
  password: z
    .string()
    .min(1, { message: "Field is empty" })
    .min(8, { message: "Password can't be less than 8 chars" }),
});
const signupValidation = z
  .object({
    email: z.string().min(1, { message: "Field is empty" }).email(),
    username: z.string().min(1, { message: "Field is empty" }),
    password: z
      .string()
      .min(1, { message: "Field is empty" })
      .min(8, { message: "Password can't be less than 8 chars" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Field is empty" })
      .min(8, { message: "Password can't be less than 8 chars" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
export default { loginValidation, signupValidation };

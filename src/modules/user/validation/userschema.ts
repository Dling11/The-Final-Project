import { TypeOf, z } from "zod";

export const userSchema = z.object({
  name: z.string().optional().nullable(),
  email: z.string().email(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().url().optional().nullable(),
});

export type UserSchemaType = z.infer<typeof userSchema>;

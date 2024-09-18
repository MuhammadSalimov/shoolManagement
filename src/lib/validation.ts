import { z } from "zod";

export const authSchema = z.object({
  login: z.string(),
  password: z.string().min(3).max(30),
});
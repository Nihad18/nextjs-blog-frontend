import { z } from "zod";

export const TagSchema = z
  .object({
    // defines a required field called message with length constraints of 3-50 characters.
    tagName: z.string().min(3).max(50),
})

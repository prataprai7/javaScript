import {z} from "zod";

export const PersonSchema = z.object(
    {
        id: z.number(),
        name: z.string(),
        age: z.number().min(0, "Age must be a positive number")
    }
)
// Domain model - Person
export type Person = z.infer<typeof PersonSchema>;


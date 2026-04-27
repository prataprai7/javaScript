import {z} from "zod";

export const ProductSchema = z.object(
    {
        id: z.string(),
        name: z.string().min(1, "Name must not be empty").default("Unnamed Product"),
        price: z.number().min(0, "Price must be a positive number"),
        category:z.string().optional(),
    }
);

// Domain model - Person
export type Product = z.infer<typeof ProductSchema>;

export const UpdateProductDTO = ProductSchema.partial();

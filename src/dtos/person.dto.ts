import {z} from "zod";
import { PersonSchema } from "../types/person.type";
// DTO - Data transer object(can be any input/output to client)
export const CreatePersonDTO = PersonSchema.omit({id: true});
// for create, id is not required 
export type CreatePersonDTO = z.infer<typeof CreatePersonDTO>;

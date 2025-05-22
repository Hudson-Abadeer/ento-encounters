import { type SchemaTypeDefinition } from "sanity";
import { bugs } from "./bug";
import { families } from "./family";
import { locations } from "./location";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bugs, families, locations],
};

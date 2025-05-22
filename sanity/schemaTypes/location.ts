import { defineField, defineType } from "sanity";

export const locations = defineType({
  type: "document",
  name: "locations",
  title: "Locations",
  fields: [
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
  ],
});

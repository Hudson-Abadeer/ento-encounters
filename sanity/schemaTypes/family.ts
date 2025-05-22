import { defineField, defineType } from "sanity";

export const families = defineType({
  type: "document",
  name: "families",
  title: "Families",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

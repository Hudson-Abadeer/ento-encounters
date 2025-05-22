import { defineField, defineType } from "sanity";

export const bugs = defineType({
  type: "document",
  name: "bugs",
  title: "Bugs",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Scientific Name",
      name: "scientificName",
      type: "string",
    }),
    defineField({
      title: "Family",
      type: "array",
      name: "family",
      of: [
        {
          type: "reference",
          to: [{ type: "families" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: "Class",
      name: "class",
      type: "string",
    }),
    defineField({
      title: "Location",
      type: "array",
      name: "location",
      of: [{ type: "reference", to: [{ type: "locations" }] }],
    }),
    defineField({
      title: "Media",
      name: "media",
      type: "image",
    }),
    defineField({
      title: "Notes",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

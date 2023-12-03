const schema = {
  name: "resourse",
  tite: "Resourse",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validtion: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { sourse: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validtion: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validtion: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validtion: (Rule: any) => Rule.required(),
      options: {
        list: ["all", "next 13", "frontend", "backend", "fullstack", "other"],
      },
    },
  ],
};

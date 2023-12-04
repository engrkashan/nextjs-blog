const schema = {
  name: "resoursePlaylist",
  tite: "Resourse Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validtion: (Rule: any) => Rule.required(),
    },
    {
      name: "resourse",
      title: "Resourse",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resourse" }] }],
    },
  ],
};

export default schema;

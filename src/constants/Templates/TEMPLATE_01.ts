export const TEMPLATE_01 = {
  id: "TEMPLATE_01",
  title: "Template 1",
  blueprint: {
    type: "row", //layout
    flexDirection: "column",
    pt:4,
    alignItems: "flexStart",
    children: [
      {
        type: "column", //layout
        flexDirection: "row",
        gap: 2,
        backgroundColor: 'antiquewhite',
        justifyContent: "flexStart",
        alignItems: "center",
        children: [
          {
            type: "image", //elem
            variant: "image",
            input: "Top Center - Panel 01 - variant(image)",
            src: "	https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
            width: "150px",
            height: "150px",
            placeholder: "image",
            preview: false,
          },
          {
            type: "column",
            flexDirection: 'column',
            children: [
              {
                type: "typography", //elem
                variant: "title",
                level: "2",
                style: { textTransform: 'uppercase', marginBottom: 0 },
                input: "Matthew Jones",
              },
              {
                type: "typography", //elem
                variant: "paragraph",
                input: "Financial Analyst",
              },
            ]
          },
        ],
      },
    ],
  },
};

export default TEMPLATE_01;

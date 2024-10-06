export const TEMPLATE_03 = {
  id: "TEMPLATE_03",
  title: "Template 3",
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
                style: { marginTop: 0, color: 'red' },
                input: "Susan Stone, Marketing Manager",
              },
              {
                type: "typography", //elem
                variant: "paragraph",
                style: { marginBottom: 0 },
                input: "77, Serial Drive, Austin, TX 78705, US",
              },
              {
                type: 'row',
                flexDirection: 'row',
                gap: 1,
                children: [
                  {
                    type: "typography", //elem
                    variant: "paragraph",
                    input: "susan.12@gmail.com",
                  },
                  {
                    type: "typography", //elem
                    variant: "paragraph",
                    input: "(512) 465-6312",
                  }
                ]
              }
            ]
          },
        ],
      },
    ],
  }
};

export default TEMPLATE_03;

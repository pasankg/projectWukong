import { TemplateObject } from "../../types";
// New York
export const TEMPLATE_02: TemplateObject[] = {
  id: "TEMPLATE_02",
  title: "Template 2",
  blueprint: [
    {
      type: "row", //layout
      flexDirection: "column",
      alignItems: "center",
      pt: 4,
      children: [
        {
          type: "column", //layout
          flexDirection: "row",
          justifyContent: "space-between",
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
          ],
        },
      ],
    },
    {
      type: "row", //layout
      flexDirection: "column",
      alignItems: "center",
      children: [
        {
          type: "column", //layout
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          children: [
            {
              type: "typography", //elem
              variant: "title",
              level: "2",
              style: { textTransform: 'uppercase' },
              input: "Sophie Wright",
            },
          ],
        },
      ],
    },
    {
      type: "row",
      flexDirection: 'row',
      alignItems: 'center',
      gap: 1,
      justifyContent: 'center',
      children: [
        {
          type: "typography", //elem
          variant: "paragraph",
          level: "2",
          style: { textTransform: 'uppercase' },
          input: "Manager",
        },
        {
          type: "typography", //elem
          variant: "paragraph",
          level: "2",
          style: { textTransform: 'uppercase' },
          input: "White Plains, NY 10605, United States",
        },
        {
          type: "typography", //elem
          variant: "paragraph",
          level: "2",
          style: { textTransform: 'uppercase' },
          input: "(914) 804-6157",
        },
      ]
    }
  ],
};

export default TEMPLATE_02;

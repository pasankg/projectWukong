import { TemplateObject } from '../../types'
// New York
export const TEMPLATE_02: TemplateObject[] = [
  {
    type: "row", //layout
    flexDirection: 'column',
    alignItem: 'center',
    children: [
      {
        type: "column",  //layout
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        children: [
          {
            type: "avatar", //elem
            variant: 'avatar',
            input: "Top Center - Panel 01 - variant(image)",
            size: "large",
            shape: "square",
            icon: "SmileOutlined",
          },
          {
            type: "image", //elem
            variant: 'image',
            input: "Top Center - Panel 01 - variant(image)",
            src: "https://duckduckgo.com/assets/logo_homepage.alt.v109.svg",
            width: "150px",
            height: "150px",
            placeholder: "image"
          }
        ],
      },
    ],
  },
  {
    type: "row", //layout
    flexDirection: 'column',
    alignItem: 'center',
    children: [
      {
        type: "column",  //layout
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        children: [
          {
            type: "typography", //elem
            variant: 'paragraph',
            level: 'body-sm',
            input: "Top Center - Panel 02 - level 02 - variant(paragraph)",
          }
        ],
      },
    ],
  }

];


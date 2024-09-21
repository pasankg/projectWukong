export const TEMPLATE_01 = {
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
            variant: 'title',
            level: 5,
            input: "Left - Panel 01 - level 5 - variant(title)",
          },
          {
            type: "typography",
            level: 1,
            variant: 'title',
            input: "right - Panel 02 - level 1 - variant(title)",
          },
        ],
      },
      {
        type: "column",
        flexDirection: 'row',
        children: [{
          type: "typography",
          variant: 'paragraph',
          input: "left - Panel 02 - level 1 - variant(paragraph)",
        }],
      },
    ],
  };


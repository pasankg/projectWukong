export const TEMPLATE_03 = {
  id: 'template3',
  label: 'Template 3',
  type: "row", //layout
  flexDirection: 'column',
  alignItem: 'left',
  children: [
    {
      type: "column",  //layout
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'left',
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
          input: "Left - Panel 02 - level 1 - variant(title)",
        },
      ],
    },
    {
      type: "column",
      flexDirection: 'row',
      alignItems: 'left',
      children: [{
        type: "typography",
        variant: 'paragraph',
        input: "left - Panel 02 - level 1 - variant(paragraph)",
      }],
    },
  ],
};

export default TEMPLATE_03;

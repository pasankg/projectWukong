import { FC } from "react";
import {
  Typography as AntdTypography,
  TypographyProps as AntdTypographyProps,
} from "antd";

type VariantType = "title" | "paragraph";

declare const TITLE_ELE_LIST: readonly [1, 2, 3, 4, 5];

interface TypographyProps extends AntdTypographyProps {
  children: string;
  variant: VariantType;
  level?: (typeof TITLE_ELE_LIST)[number]
}

const { Title, Paragraph, Text } = AntdTypography;

const Typography: FC<TypographyProps> = ({ children, variant, level = 1,  ...rest }) => {

  switch (variant) {
    case "title":
      return <Title level={level} {...rest}>{children}</Title>;
    case "paragraph":
      return <Paragraph>{children}</Paragraph>;
    default:
      return <Text>{children}</Text>;
  }
};

export default Typography;

// <Typography variant='title' level={1}></Typography>   -> <h1></h1>
// <Typography variant='paragraph'></Typography> => <p></p>

// import { Typography } from 'antd'
// Typography => { Title } => <Title level={1}></Title>
// Typography => { Text } => <Text></Text>
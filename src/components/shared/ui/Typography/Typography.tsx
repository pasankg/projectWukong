import { FC } from "react";
import {
  Typography as AntdTypography,
  TypographyProps as AntdTypographyProps,
} from "antd";

type VariantType = "title" | "paragraph";

interface TypographyProps extends AntdTypographyProps {
  children: string;
  variant: VariantType;
  level?: unknown
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

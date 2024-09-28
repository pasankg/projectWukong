import { Image as AntdImage, ImageProps as AntImageProps } from "antd";
import { FC } from "react";

interface ImageProps extends AntImageProps {
  varient: string;
}

const ImageDrawer: FC<ImageProps> = ({
  src,
  width,
  alt,
  height,
  placeholder,
  ...restProps
}) => {
  return (
    <AntdImage
      width={width}
      src={src}
      height={height}
      placeholder={placeholder}
      alt={alt}
      {...restProps}
    />
  );
};

export default ImageDrawer;

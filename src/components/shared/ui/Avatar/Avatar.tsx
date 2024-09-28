import { Avatar as AntdAvatar, AvatarProps as AntAvatartProps } from "antd";
import { FC } from "react";

interface AvatarProps extends AntAvatartProps {
  src: string;
  varient: string;
}

const Avatar: FC<AvatarProps> = ({ size = 20, ...restProps }) => {
  return (
    <>
      <AntdAvatar size={size} {...restProps} />
    </>
  );
};

export default Avatar;

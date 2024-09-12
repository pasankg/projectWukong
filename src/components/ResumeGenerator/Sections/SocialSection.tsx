import { FC } from "react";
import { Social } from "../../../types";

interface SocialSectionProps extends Social {}

const SocialSection: FC<SocialSectionProps> = ({ socialData }) => {
  if (!socialData) return null;

  return (
    <>
      {socialData.map((social, s) => {
        return (
          <a key={s} href={social?.socialLink}>
            {social?.socialName}
          </a>
        );
      })}
    </>
  );
};

export default SocialSection;

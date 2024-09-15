import { FC } from "react";
import { Social } from "../../../types";
import { map } from "lodash";

interface SocialSectionProps extends Social {}

const SocialSection: FC<SocialSectionProps> = ({ socialData }) => {
  if (!socialData) return null;

  return (
    <>
      {map(socialData, (item, index) => {
        return (
          <a key={`social-element-${index}`} href={item?.socialLink}>
            {item?.socialName}
          </a>
        );
      })}
    </>
  );
};

export default SocialSection;

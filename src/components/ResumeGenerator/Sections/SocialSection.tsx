import { FC } from "react";
import { Social } from "../../../types";
import { map, isEmpty } from "lodash";

interface SocialSectionProps {
  socialData: Social[]
}

const SocialSection: FC<SocialSectionProps> = ({ socialData }) => {
  if (isEmpty(socialData)) return null; 

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

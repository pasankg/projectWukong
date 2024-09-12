import { FC } from "react";
import { nameCard } from "../../../types";
import { SocialSection } from ".";

interface NameCardSectionProps extends nameCard {}

const NameCardSection: FC<NameCardSectionProps> = ({
  fullName,
  designation,
  contactDetails,
}) => {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{designation}</p>
      <ul>        
        <li>{contactDetails?.location}</li>
        <li>{contactDetails?.email}</li>
        <li>{contactDetails?.phoneNumber}</li>
        <SocialSection socialData={contactDetails?.social}/>
      </ul>
    </div>
  );
};

export default NameCardSection;

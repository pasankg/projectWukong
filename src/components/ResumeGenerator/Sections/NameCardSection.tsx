import { FC } from "react";
import { nameCard } from "../../../types";

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
      </ul>
    </div>
  );
};

export default NameCardSection;

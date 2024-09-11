import { FC } from "react";
import { nameCard } from "../../../types/index";

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
        {console.log(contactDetails)}
        <li>{contactDetails.email}</li>
      </ul>
    </div>
  );
};

export default NameCardSection;

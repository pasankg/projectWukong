import { FC } from "react";
import { NameCard } from "../../../types";
import { SocialSection } from ".";
import { isEmpty } from "lodash";

const NameCardSection: FC<NameCard> = ({
  fullName,
  designation,
  contactDetails,
}) => {
  if(isEmpty(fullName) || isEmpty(designation) || isEmpty(contactDetails)) return null;
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{designation}</p>
      <ul>
        <li>{contactDetails?.location}</li>
        <li>{contactDetails?.email}</li>
        <li>{contactDetails?.phoneNumber}</li>
        <SocialSection socialData={contactDetails?.social} />
      </ul>
    </div>
  );
};

export default NameCardSection;

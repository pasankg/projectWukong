import { FC } from "react";
import parse from "html-react-parser";
import { Resume } from "../../../types";
import { map, isEmpty } from "lodash";
interface SummarySectionProps {
  profileSummary: Resume["profileSummary"];
}

const SummarySection: FC<SummarySectionProps> = ({ profileSummary }) => {
  if (isEmpty(profileSummary)) return null;
  return (
    <>
      {/* Using lodash library */}
      {map(profileSummary, (item, index) => {
        return <li key={`profile-summary-${index}`}>{parse(item)}</li>;
      })}

      {/* Using JS array map */}
      {/* 
        {profileSummaryData.map((item, i) => {
          return <li key={i}>{parse(item)}</li>;
        })}
      */}
    </>
  );
};

export default SummarySection;

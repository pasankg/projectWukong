import { FC } from "react";
import parse from "html-react-parser";
import { profileSummary } from "../../../types";
import { map } from "lodash";
interface SummarySectionProps extends profileSummary {}

const SummarySection: FC<SummarySectionProps> = ({ profileSummaryData }) => {
  if (!profileSummaryData) return null;
  return (
    <>
      {/* Using lodash library */}
      {map(profileSummaryData, (item, index) => {
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

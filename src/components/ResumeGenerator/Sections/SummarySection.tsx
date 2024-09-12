import { FC } from "react";
import parse from "html-react-parser";
import { profileSummary } from "../../../types";
interface SummarySectionProps extends profileSummary {}

const SummarySection: FC<SummarySectionProps> = ({ profileSummaryData }) => {  
  if (!profileSummaryData) return null;
  return (
    <>
      {profileSummaryData.map((item, i) => {
        return <li key={i}>{parse(item)}</li>;
      })}
    </>
  );
};

export default SummarySection;

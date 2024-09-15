import { FC } from "react";
import { Experience } from "../../../types";
import { map } from "lodash";
import dayjs from "dayjs";

interface ExperienceSectionProps extends Experience {}

const ExperienceSection: FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <>
      {map(experiences, (item, index) => {
        return (
          <ul>
            <li key={`experience-item-designation-${index}`}>
              {item?.designation}
            </li>
            <li key={`experience-item-company-${index}`}>
              {item?.companyName}
            </li>
            <li key={`experience-item-period-${index}`}>
              {dayjs(item?.period?.startDate).format("MMM YYYY") + `-`}{" "}
              {item?.period?.endDate}
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default ExperienceSection;

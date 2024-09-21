import { FC } from "react";
import { Experience } from "../../../types";
import { map, isEmpty } from "lodash";
import { getTenure } from "../../../utility";
import { dayjs } from "../../../vendors";

interface ExperienceProp {
  experiences: Experience[];
}

const ExperienceSection: FC<ExperienceProp> = ({ experiences }) => {
  if (isEmpty(experiences)) return null;
  return (
    <>
      {map(experiences, (item, index) => {
        return (
          <ul key={`experience-item-${index}`}>
            <li>{item?.designation}</li>
            <li>{item?.companyName}</li>
            <li>
              {getTenure.getPeriod(
                item?.period?.startDate,
                item?.period?.endDate
              )}
              <br />
              {getTenure.getDuration(
                dayjs(item?.period?.startDate),
                item?.period?.endDate
              )}
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default ExperienceSection;

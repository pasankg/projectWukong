import { FC } from "react";
import { Experience } from "../../../types";
import { map, isEmpty } from "lodash";
import { getPeriod } from "../../../utility";

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
              {getPeriod.getDuration(
                item?.period?.startDate,
                item?.period?.endDate
              )}
              {/* {dayjs(item?.period?.startDate).format("MMM YYYY") + `-`}{" "}
              {item?.period?.endDate} */}
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default ExperienceSection;

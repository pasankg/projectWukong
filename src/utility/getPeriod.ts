import { dayjs } from '../vendors'
import { isEmpty } from "lodash";

const getPeriod = (startDate, endDate) => {
 if (isEmpty(startDate) || !dayjs(startDate).isValid()) return '';
 const processedStart = dayjs(startDate).format("MMM YYYY")

 if (isEmpty(endDate)) return `${processedStart} - current`;
 if (!dayjs(endDate).isValid()) return `${processedStart}`

 const processedEndDate = dayjs(endDate).format("MMM YYYY")
 return `${processedStart} - ${processedEndDate}`

}


const getDuration = (startDate, endDate) => {
 const duration = dayjs.duration(startDate.diff(endDate))
 return duration;
}

export default { getPeriod, getDuration }
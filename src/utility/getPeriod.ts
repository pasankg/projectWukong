import { dayjs } from '../vendors'
import { Dayjs } from 'dayjs' // Import the Dayjs type
import { isEmpty, toLower } from "lodash";

export const getPeriod = (startDate: Dayjs | string, endDate: Dayjs | string) => {
 if (isEmpty(startDate) || !dayjs(startDate).isValid()) return '';
 const processedStart = dayjs(startDate).format("MMM YYYY")

 if (isEmpty(endDate)) return `${processedStart} - unknown`;
 if (!dayjs(endDate).isValid()) {
  if (toLower(endDate) === 'current') {
   return `${processedStart} - current`;
  }
  return `${processedStart}`
 }

 const processedEndDate = dayjs(endDate).format("MMM YYYY")
 return `${processedStart} - ${processedEndDate}`

}

export const getDuration = (startDate: Dayjs, endDate: Dayjs | string) => {
 if (isEmpty(endDate)) {
  return `Duration unknown`
 }

 if (toLower(endDate) === 'current') {
  endDate = dayjs();
  return getDurationText(startDate, endDate)
 }

 if (!dayjs(endDate).isValid()) {
  return `Duration unknown`
 } else {
  endDate = dayjs();
  return getDurationText(startDate, endDate)
 }
}

const getDurationText = (startDate: Dayjs | string, endDate: Dayjs | string) => {
 const duration = dayjs.duration(dayjs(endDate).diff(startDate))
 const years = duration.years();
 const months = duration.months();

 return `Duration: ${years ? `${years} years and` : ''} ${months} months`
}

export default { getPeriod, getDuration }
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import dayjs from 'dayjs';

dayjs.extend(calendar) // calendar plugin
dayjs.extend(timezone) // timezone plugin
dayjs.extend(utc) // utc plugin
dayjs.extend(advancedFormat) // use plugin
dayjs.extend(relativeTime) // use plugin

export {
    dayjs
};
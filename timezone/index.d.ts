import momentTz from 'moment-timezone';
import moment from "moment";
declare type DateMomentString = Date | string | moment.Moment;
declare const mmByZone: (time: DateMomentString, zone: string) => momentTz.Moment;
declare const mmGuestZone: () => string;
declare const mmGTM: (timezone?: string) => string;
export { mmByZone, mmGuestZone, mmGTM };

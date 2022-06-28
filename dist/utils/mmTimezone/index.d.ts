import momentTz from 'moment-timezone';
import {DateMomentString} from "../../common/typeExportTs";

declare const mmByZone: (time: DateMomentString, zone: string) => momentTz.Moment;
declare const mmGuestZone: () => string;
export {mmByZone, mmGuestZone};

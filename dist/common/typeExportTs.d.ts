import moment from "moment";

declare type DateMomentString = Date | string | moment.Moment;
declare type DateMoment = Date | moment.Moment;
export type {DateMoment, DateMomentString};

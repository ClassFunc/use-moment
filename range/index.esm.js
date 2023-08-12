import * as Moment from "moment";
import {extendMoment} from "moment-range";

const mmRange = extendMoment(Moment);
const mmRangeOnly = (aTime, bTime) => {
  return mmRange.range(aTime, bTime);
};
const mmRangeBy = (aTime, bTime, by, options) => {
  return mmRange.range(aTime, bTime).by(by);
};
const mmRangeByArray = (aTime, bTime, by, options) => {
  return Array.from(mmRange.range(aTime, bTime).by(by));
};
export {
  mmRange,
  mmRangeBy,
  mmRangeByArray,
  mmRangeOnly
};

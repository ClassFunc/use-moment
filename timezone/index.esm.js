"use strict";
import momentTz from "moment-timezone";

const mmByZone = (time, zone) => {
  return momentTz.tz(time, zone);
};
const mmGuestZone = () => {
  return momentTz.tz.guess();
};
export {
  mmByZone,
  mmGuestZone
};

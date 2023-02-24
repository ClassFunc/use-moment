import moment from "moment";

type DateMomentString = Date | string | moment.Moment | moment.MomentInput;

const mmFormat = (aTime: DateMomentString, format: string = "") => {
  return moment(aTime).format(format);
};

const mmFormatUTC = (aTime: DateMomentString, format: string = "") => {
  return moment(aTime).utc().format(format);
};

const mmFormatDDD = (aTime: DateMomentString) => {
  return moment(aTime).format("ddd");
};

const mmFormatDDDD = (aTime: DateMomentString) => {
  return moment(aTime).format("dddd");
};

const mmFormatMMDD = (aTime: DateMomentString) => {
  return moment(aTime).format("MM/DD");
};

const mmFormatDDMM = (aTime: DateMomentString) => {
  return moment(aTime).format("DD/MM");
};

const mmFormatYYYYMMDD = (aTime: DateMomentString) => {
  return moment(aTime).format("YYYY-MM-DD");
};
const mmFormatYYYY = (aTime: DateMomentString) => {
  return moment(aTime).format("YYYY");
};

const mmFormatYYYYMMDDHHMMSSZ = (aTime: DateMomentString) => {
  return moment(aTime).utc().format("YYYYMMDDTHHmmss") + "Z";
};

const mmExp = (aTime: DateMomentString) => {
  return moment(aTime);
};

export {
  mmExp,
  mmFormat,
  mmFormatUTC,
  mmFormatDDD,
  mmFormatMMDD,
  mmFormatYYYYMMDD,
  mmFormatDDDD,
  mmFormatDDMM,
  mmFormatYYYY,
  mmFormatYYYYMMDDHHMMSSZ,
};

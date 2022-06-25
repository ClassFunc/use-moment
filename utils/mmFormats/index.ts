import moment from "moment"
import {DateString} from "../../common/typeExportTs";

const mmFormat = (aTime: DateString, format: string = '') => {
    return moment(aTime).format(format)
}

const mmFormatUTC = (aTime: DateString, format: string = '') => {
    return moment(aTime).utc().format(format)
}

const mmFormatDDD = (aTime: DateString) => {
    return moment(aTime).format("ddd")
}

const mmFormatDDDD = (aTime: DateString) => {
    return moment(aTime).format("dddd")
}

const mmFormatMMDD = (aTime: DateString) => {
    return moment(aTime).format("MM/DD")
}

const mmFormatDDMM = (aTime: DateString) => {
    return moment(aTime).format("DD/MM")
}

const mmFormatYYYYMMDD = (aTime: DateString) => {
    return moment(aTime).format("YYYY-MM-DD")
}
const mmFormatYYYY = (aTime: DateString) => {
    return moment(aTime).format("YYYY")
}

const mmFormatYYYYMMDDHHMMSSZ = (aTime: DateString) => {
    return moment(aTime).utc().format("YYYYMMDDTHHmmss") + "Z"
}

export {
    mmFormat,
    mmFormatUTC,
    mmFormatDDD,
    mmFormatMMDD,
    mmFormatYYYYMMDD,
    mmFormatDDDD,
    mmFormatDDMM,
    mmFormatYYYY,
    mmFormatYYYYMMDDHHMMSSZ
}
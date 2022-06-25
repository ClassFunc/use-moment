import moment from "moment"
import {DateString} from "../../common/typeExportTs";

const mmFormat = (aTime: DateString, format: string = "YYYY-MM-DD") => {
    return moment(aTime).format(format)
}

const mmFormatDDD = (aTime: DateString) => {
    return moment(aTime).format("ddd")
}

const mmFormatMMDD = (aTime: DateString) => {
    return moment(aTime).format("MM/DD")
}

const mmFormatYYYYMMDD = (aTime: DateString) => {
    return moment(aTime).format("YYYY-MM-DD")
}

const mmFormatYYYYMMDDHHMMSSZ = (aTime: DateString) => {
    return moment(aTime).utc().format("YYYYMMDDTHHmmss") + "Z"
}

export {
    mmFormat,
    mmFormatDDD,
    mmFormatMMDD,
    mmFormatYYYYMMDD,
    mmFormatYYYYMMDDHHMMSSZ
}
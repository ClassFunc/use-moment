import {dayjs} from "../index";

const djsParse = (aTime: string) => {
    return dayjs(aTime)
}

const djsParseNow = () => {
    console.log(dayjs.locale());

    return dayjs()
}

const djsParseUTC = (aTime: string) => {
    return dayjs(aTime).utc()
}

const djsParseNowUTC = () => {
    return dayjs().utc()
}

export {
    djsParse,
    djsParseNow,
    djsParseUTC,
    djsParseNowUTC
}
import {mmIsAfter, mmIsSame, mmIsSameDate} from "./utils/mmChecks"
import {mmCalculatorsAdd, mmCalculatorsDiff, mmCalculatorsSet, mmToDate} from "./utils/mmCalculators";
import {mmFormat, mmFormatUTC, mmFormatYYYYMMDD} from "./utils/mmFormats";
import {mmStartOfDay} from "./utils/mmExtras";
import {mmRangeBy, mmRangeByArray, mmRangeOnly} from "./utils/mmRange";
import {mmByZone, mmGuestZone} from "./utils/mmTimezone";

// const {mmIsSame} = mmChecks

let _now = new Date()
let _now2 = new Date("2022-06-30")

console.log(mmFormat(_now))
//2022-06-25T16:45:59+07:00

console.log(mmFormatUTC(_now))
//2022-06-25T09:45:59Z

console.log(mmIsSame(_now, _now2))
//true

console.log(mmIsAfter(_now, _now2))
//false

console.log(mmIsSameDate(_now, _now2))
//true

console.log(mmToDate(_now))
//2022-06-25T09:45:59.605Z

console.log(mmToDate(mmCalculatorsAdd(_now, 1, 'days')))
//2022-06-26T09:45:59.000Z

console.log(mmFormatUTC(mmCalculatorsAdd(_now, 1, 'days'), 'YYYY-MM-DD'))
//2022-06-26

console.log(mmCalculatorsDiff(mmStartOfDay(mmCalculatorsAdd(_now, 1, 'days')), _now))
//24817480

console.log(mmFormatYYYYMMDD(_now))
//2022-06-26

console.log(mmFormat(mmCalculatorsSet(_now, {hours: 3, minutes: 30, seconds: 30, milliseconds: 30}), "HH:mm"))

console.log(mmRangeOnly(_now, _now2))

console.log(mmRangeBy(_now, _now2, "days"))

console.log(mmRangeByArray(_now, _now2, "days"))

console.log(mmFormat(mmByZone(_now, 'Asia/Tokyo')))

console.log(mmGuestZone())
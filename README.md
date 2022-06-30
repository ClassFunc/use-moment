## use-moment

It's simpler to use moment js

- Khai báo một lần, sử dụng mãi mãi
- Không bị lặp lại import moment ở mọi nơi
- Không bị lặp lại code ở mọi nơi
- Cơ động và thực chiến

## Support for

```bash
- Typescript
- React js
- Next js
- Node js
```

## Install package

```html
npm i --save use-moment
yarn add use-moment

* use-moment for next-js
- install next-transpile-modules
yarn add next-transpile-modules
npm install --save next-transpile-modules
* in next.config.js file
const withTM = require('next-transpile-modules')(['use-moment'])

module.exports = withTM({
// next config code
});

```

## Use package

```ts

import {mmFormatDDD} from "use-moment/format";
import {mmAdd} from "use-moment/calculator";
import {mmSetLocale} from "use-moment/locale";

*
mmCalculators
let _now = new Date()

1.
mmToDate
mmToDate(_now) // output: 2022-06-28T03:14:40.895Z
2.
mmAdd
mmAdd(_now, 1, 'days') // output: Moment<2022-06-29T10:15:42+07:00>
3.
mmSubtract
mmSubtract(_now, 1, 'days') // output: Moment<2022-06-27T10:17:31+07:00>
4.
mmDiff
mmDiff(_now, _now) // output: 0
5.
mmSet
mmSet(_now, {hours: 3, minutes: 30, seconds: 30, milliseconds: 30}) // output: Moment<2022-06-28T03:30:30+07:00>

* mmChecks
1.
mmIsSame
mmIsSame(_now, _now) // output: true
2.
mmIsAfter // output: true/false
3.
mmIsBefore // output: true/false
4.
mmIsSameOrAfter // output: true/false
5.
mmIsSameOrBefore // output: true/false
6.
mmIsSameDate // output: true/false

* mmFormats
1. mmFormat // output: 2022-06-28T10:28:23+07:00
2. mmFormatUTC // output: 2022-06-28T03:28:55Z
3. mmFormatDDD // output: Tue
4. mmFormatMMDD // output: 06/28
5. mmFormatYYYYMMDD // output: 2022-06-28
6. mmFormatDDDD // output: Tuesday
7. mmFormatDDMM // output: 28/06
8. mmFormatYYYY // output: 2022
9. mmFormatYYYYMMDDHHMMSSZ // output: 20220628T033015Z

* mmExtras
1. mmStartOfDay
2. mmStartOfWeeks
3. mmStartOfIsoWeeks
4. mmStartOfMonth
5. mmStartOfMonths
6. mmEndOfDay
7. mmEndOfWeek
8. mmEndOfWeeks
9. mmEndOfIsoWeeks
10. mmEndOfMonth
11. mmEndOfMonths
12. mmIsoWeekDay
13. mmIsoWeeksDays

* mmRanges
1.
mmRange
import * as moment from "../index";
import {extendMoment} from 'moment-range';
const mmRange = extendMoment(moment);

let aTime = new Date()
let bTime = new Date("2022-06-30")
2. mmRangeOnly
use: mmRangeOnly(aTime, bTime)
//output: t {start: Moment<2022-06-28T10:35:40+07:00>, end: Moment<2022-06-30T07:00:00+07:00>}
3. mmRangeBy
use: mmRangeBy(aTime, bTime, "days")
//output: { [Symbol(Symbol.iterator)]: [Function (anonymous)] }

4. mmRangeByArray
use: mmRangeByArray(aTime, bTime, "days")
//output: [Moment<2022-06-28T10:38:53+07:00>, Moment<2022-06-29T10:38:53+07:00>]
//This array include moment value

* mmTimezone
1. mmByZone
use: mmFormat(mmByZone(aTime, 'Asia/Tokyo'))
//output: 2022-06-28T12:38:53+09:00
2. mmGuestZone
use: mmGuestZone()
//output: Asia/Saigon
```
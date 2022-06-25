## use-moment

[![NPM](https://img.shields.io/npm/v/use-moment.svg)](https://www.npmjs.com/package/use-moment) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## used

```markdown
import {mmIsAfter, mmIsSame, mmIsSameDate} from "use-moment/utils/mmChecks"
import {mmCalculatorsAdd, mmToDate} from "use-moment/utils/mmCalculators"; import {mmFormat} from "
use-moment/utils/mmFormats";

// const {mmIsSame} = mmChecks

let _now = new Date()
let _now2 = new Date()

console.log(mmFormat(_now))
//2022-06-25 console.log(mmIsSame(_now, _now2))
//true console.log(mmIsAfter(_now, _now2))
//false console.log(mmIsSameDate(_now, _now2))
//true console.log(mmToDate(_now))
//2022-06-25T08:38:46.155Z console.log(mmToDate(mmCalculatorsAdd(_now, 1, 'days')))
//2022-06-26T08:38:46.000Z

```
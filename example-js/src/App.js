import {mmSetLocale} from "use-moment/dist/utils/mmLocales";
import {mmFormat} from "use-moment/dist/utils/mmFormats";
import {dayjs} from "use-moment/dist/dayjs/index";

dayjs.locale('ja')
mmSetLocale('ja')

function App() {
    console.log(mmFormat(new Date(), "YYYY-MM-DD dd HH:mm"))

    return (
        <div className="App">

        </div>
    );
}

export default App;

import {mmSetLocale} from "use-moment/dist/utils/mmLocales";
import {mmFormat} from "use-moment/dist/utils/mmFormats";
import {djsSetLocale} from "use-moment/dist/dayjs/djsLocales";
import {djsParse} from "use-moment/dist/dayjs/djsParses";

mmSetLocale('en-gb')
djsSetLocale('en-gb')

function App() {
    return (
        <div className="App">
            {
                mmFormat(new Date(), "YYYY-MM-DD dd HH:mm")
            }
            <br/>
            {
                djsParse(new Date().toString()).format("YYYY-MM-DD dd HH:mm")
            }
        </div>
    );
}

export default App;

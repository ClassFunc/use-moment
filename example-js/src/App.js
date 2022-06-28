import './App.css';
import {mmFormatDDD} from "use-moment/dist/src/utils/mmFormats";
import {mmFormats} from "use-moment"

const {mmFormatDDDD} = mmFormats

function App() {

  console.log(mmFormatDDD(new Date()))
  console.log(mmFormatDDDD(new Date()))

  return (
      <div className="App">

      </div>
  );
}

export default App;

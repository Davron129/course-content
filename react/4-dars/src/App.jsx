import { useState } from "react";
import {Modal} from "./Modal";

function App() {
  const [ isHidden, setIsHidden ] = useState(false);

  return (
    <>
    <div>
      <button onClick={() => setIsHidden(!isHidden)}>
        { isHidden ? "SHow" : "Hide" }
      </button>
    </div>
    <Modal />
    </>
  )
}

export default App


import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [click, setClick] = useState(0);

  const butnClicked = () => {
    setClick(click+1);
  }
  return (
    <div>
        <p>Button clicked {click} times</p>
        <button onClick={butnClicked}>Click me</button>
    </div>
  )
}

export default App;



/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";

import "./App.css";
import Form from "./components/form/Form.jsx";
import Title from "./components/Title/Title.jsx";
function App() {

  const [toggle , setToggle] = useState(true);

  return (
    <Fragment>
      {/* >>> Task4.2 >>>*/}

      <Form />

      {/* <<< Task4.2 <<<*/}


      {/* >>> Task4.1 >>>*/}

      {/* {toggle&& <Title />}

    <button onClick={()=> setToggle((prev) => !prev)} >Button</button> */}

      {/* <<< Task4.1 <<<*/}
    </Fragment>
  );
}

export default App;

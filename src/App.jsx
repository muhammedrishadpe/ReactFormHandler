/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";

import "./App.css";
// import Title from "./components/Title/Title";

function App() {
  const [field, setFields] = useState({
    firstname: "",
    email: "",
    gender: "",
    language: [],
    birth: "",
    country: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateData(field);
    setError(error);
    console.log(field, "===fields");
  };

  const onHandleChange = (event) => {
    console.log(event, "ddddd");
    if (event.target.name === "language") {
      let copyFields = { ...field };
      if (event.target.checked) {
        copyFields.language.push(event.target.value);
      } else {
        copyFields.language = copyFields.language.filter(
          (el) => el !== event.target.value
        );
      }

      setFields(copyFields);
    } else {
      setFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const validateData = (data) => {
    const error = {};
    if (!data.firstname) {
      error.firstname = "Please Enter Your First Name";
    }
    if (!data.email) {
      error.email = "Please Enter Your Email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Please enter a valid email";
    }
    if (!data.gender) {
      error.gender = "please select gender";
    }
    if (data.language.length === 0) {
      error.language = "Please select the language";
    }
    if (!data.birth) {
      error.birth = "Please select your date of birth";
    }
    if (!data.country) {
      error.country = "Please select your location";
    }

    return error;
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="firstname" onChange={onHandleChange} />
          <span className="error">{error.firstname}</span>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={onHandleChange} />
          <span className="errormsg">{error.email}</span>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={onHandleChange}
          />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={onHandleChange}
          />
          <label htmlFor="">Female</label>
          <span className="errormsg">{error.gender}</span>
        </div>
        <label htmlFor="">Language</label>
        <div>
          <label htmlFor="javascript">JavaScript</label>
          <input
            type="checkbox"
            name="language"
            value="javascript"
            onChange={onHandleChange}
            checked={field.language.indexOf("javascript") !== -1}
          />
            <span className="errormsg">{error.language}</span>
        </div>
        <div>
          <label htmlFor="html">HTML</label>
          <input
            type="checkbox"
            name="language"
            value="html"
            onChange={onHandleChange}
            checked={field.language.indexOf("html") !== -1}
          />
        </div>
        <div>
          <label htmlFor="css">CSS</label>
          <input
            type="checkbox"
            name="language"
            value="css"
            onChange={onHandleChange}
            checked={field.language.indexOf("css") !== -1}
          />
        </div>
        <div>
          <label htmlFor="php">PHP</label>
          <input
            type="checkbox"
            name="language"
            value="php"
            onChange={onHandleChange}
            checked={field.language.indexOf("php") !== -1}
          />
        </div>
        <div>
          <label htmlFor="">Date of Birth</label>
          <input type="date" name="birth" onChange={onHandleChange} />
          <span className="errormsg">{error.birth}</span>
        </div>
        <div>
          <label htmlFor="">Country</label>
          <select name="country" onChange={onHandleChange}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qater">Qater</option>
          </select>
          <span className="errormsg">{error.country}</span>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* >>> Task4.1 >>>*/}

      {/* {toggle&& <Title/>}
    <button onClick={()=> setToggle((prev) => !prev)} >Button</button> */}
    </Fragment>
  );
}

export default App;

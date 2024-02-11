import { useState } from "react";
import "./Form.css"
function Form() {
  const [field, setFields] = useState({
    firstname: "",
    email: "",
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
  
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="firstname" name="firstname" onChange={onHandleChange} />
        <span className="error">{error.firstname}</span>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" onChange={onHandleChange} />
        <span className="errormsg">{error.email}</span>
      </div>
      <div>
        <label htmlFor="">Gender: </label>
        <input
        id="male"
          type="radio"
          name="gender"
          value={"male"}
          onChange={onHandleChange}
        />
        <label htmlFor="male">Male</label>
        <input
        id="female"
          type="radio"
          name="gender"
          value={"female"}
          onChange={onHandleChange}
        />
        <label htmlFor="female">Female</label>
        <span className="errormsg">{error.gender}</span>
      </div>
      <div>
      <label htmlFor="">Language: </label>
        <label htmlFor="javascript">JavaScript</label>
        <input
        id="javascript"
          type="checkbox"
          name="language"
          value="javascript"
          onChange={onHandleChange}
          checked={field.language.indexOf("javascript") !== -1}
        />

        <label htmlFor="html">HTML</label>
        <input
        id="html"
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
        id="css"
          type="checkbox"
          name="language"
          value="css"
          onChange={onHandleChange}
          checked={field.language.indexOf("css") !== -1}
        />

<label htmlFor="php">PHP</label>
        <input
        id="php"
          type="checkbox"
          name="language"
          value="php"
          onChange={onHandleChange}
          checked={field.language.indexOf("php") !== -1}
        />
      </div>
        <span className="errormsg">{error.language}</span>
      
      <div>
        <label htmlFor="birth">Date of Birth: </label>
        <input type="date" id="birth" name="birth" onChange={onHandleChange} />
        <span className="errormsg">{error.birth}</span>
      </div>
      <div>
        <label htmlFor="country">Country: </label>
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
    
  );
}

export default Form;

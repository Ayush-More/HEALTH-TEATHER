import { useState } from "react";
import "./../css/authorization.css";
  import { useDispatch, useSelector } from "react-redux";
  import { loginUser } from "../states/action";

const Authorization = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch  = useDispatch();
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
  };

  const handleFormData = (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");
    const passwordInput = document.getElementById("password");

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document
      .querySelectorAll(".form-group .error")
      .forEach((field) => field.classList.remove("error"));
    document
      .querySelectorAll(".error-text")
      .forEach((errorText) => errorText.remove());

    if (fullname === "") {
      showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
      showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
      showError(passwordInput, "Enter your password");
    }
    if (date === "") {
      showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
      showError(genderInput, "Select your gender");
    }

    const errorInputs = document.querySelectorAll(".form-group .error");
    const  user=  {
      fullname: fullname,
      email: email,
      password: password,
      date: date,
      gender: gender,
    }
    if (errorInputs.length > 0) {
      dispatch(loginUser(user))
      return ;
    }

    // Handle form submission in React (you might want to use a state management library or an API call here)
  
  };

  return (
    <div>
      <form onSubmit={handleFormData} action="thank-you.html">
        <h2>Form Validation</h2>
        <div className="form-group fullname">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" />
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
          <i
            id="pass-toggle-btn"
            className={`fa-solid ${
              passwordVisible ? "fa-eye" : "fa-eye-slash"
            }`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="form-group date">
          <label htmlFor="date">Birth Date</label>
          <input type="date" id="date" placeholder="Select your date" />
        </div>
        <div className="form-group gender">
          <label htmlFor="gender">Gender</label>
          <select id="gender" placeholder="Select your gender">
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Authorization;

import { useState } from "react";
import "./../css/authorization.css";

function Authorization() {
	const [isSignUp, setIsSignUp] = useState(true);
  
	const handleButtonClick = () => {
  setIsSignUp((prevIsSignUp) => !prevIsSignUp);
	};
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "", }); console.log(formData); 
	
 const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
 const response = await fetch("http://localhost:5000/api/user/signup", {
			method: "POST",
			headers: {
 "Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
  });
 console.log(formData);
	
 if (response.status === 200) {
			const data = await response.json();
			localStorage.setItem("token", data.token);
			console.log(data);
   handleButtonClick();
 } else {
			const errorData = await response.json();
			console.error(errorData);
 }
		} catch (error) {
console.error(error);
		} };
  const handleChange = (e) => {
		setFormData({  ...formData,  [e.target.name]: e.target.value,
		}); };

  const [credentials, setCredentials] = useState({ email: "", password: "" });

     const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log(data);
        alert("login Sucessful")
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
	return (
 <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
			<div className="form-container sign-up-container">
	<form  onSubmit={handleSubmit}>
		<h1>Create Account</h1>
		<div className="social-container">
			<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
		<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
		<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
		</div>
		<span>or use your email for registration</span>
		<input type="text" placeholder="Name" required name= "name" value= {formData.name} onChange={handleChange}/>
		<input type="email" placeholder="Email" required name= "email" value= {formData.email} onChange={handleChange}/>
		<input type="password" placeholder="Password"required name= "password" value= {formData.password} onChange={handleChange}/>
		<button>Sign Up</button>
	</form>
</div>
<div className="form-container sign-in-container">
	<form  onSubmit={handleSubmit1}>
		<h1>Sign in</h1>
		<div className="social-container">
			<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
			<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
			<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
		</div>
		<span>or use your account</span>
		<input type="email" placeholder="Email" required name = "email" value={credentials.email} onChange={onChange} />
		<input type="password" placeholder="Password" required name = "password" value={credentials.password} onChange={onChange}/>
		<a href="#">Forgot your password?</a>
		<button>Sign In</button>
	</form>
</div>
  
		<div className="overlay-container">
  <div className="overlay">
			<div className="overlay-panel overlay-left">
  <h1 className="head">Welcome Back!</h1>
  <p>To keep connected with us please login with your personal info</p>
  <button className="ghost" onClick={handleButtonClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
  <h1 className="head">Hello, Friend!</h1>
 <p>Enter your personal details and start the journey with us</p>
 <button className="ghost" onClick={handleButtonClick}>Sign Up</button>
			</div>
  </div>
		</div>
 </div>
	);
  }
  
  export default Authorization;
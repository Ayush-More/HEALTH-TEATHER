// import { useDispatch, useSelector } from 'react-redux';
// import { updateUser, registerSuccess, registerFailure } from './../action.js';
// import "./../css/authorization.css";

// function Authorization() {
//   const dispatch = useDispatch();
//   const { user, registrationStatus } = useSelector((state) => state);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateUser(name, value));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     // Check if password and confirm password match
//     if (user.password !== user.confirmPassword) {
//       alert("Password and Confirm Password must match!");
//       return;
//     }

//     // Add your registration logic here, for example, API call
//     if (user.name && user.email && user.password) {
//       // Registration successful
//       dispatch(registerSuccess());
//     } else {
//       // Registration failed
//       dispatch(registerFailure());
//     }
//   };

//   return (
// 	<>
//     <div className="wrapper">
//       <h2>Registration</h2>
//       <form action="#" onSubmit={handleSubmit}>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Enter your name"
//             required
//             name="name"
//             value={user.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Enter your email"
//             required
//             name="email"
//             value={user.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Create password"
//             required
//             name="password"
//             value={user.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Confirm password"
//             required
//             name="confirmPassword"
//             value={user.confirmPassword}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="policy">
//           <input type="checkbox" />
//           <h3>I accept all terms & condition</h3>
//         </div>
//         <div className="input-box button">
//           <input type="Submit" value="Register Now" />
//         </div>
//         <div className="text">
//           {registrationStatus === 'success' ? (
//             <p>Registration successful!</p>
//           ) : registrationStatus === 'failure' ? (
//             <p>Registration failed. Please try again.</p>
//           ) : null}
//           <h3>Already have an account? <a href="#">Login now</a></h3>
//         </div>
//       </form>
//     </div>
// 	</>
//   );
// }

// export default Authorization;
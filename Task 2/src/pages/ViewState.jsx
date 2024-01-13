//  import { useSelector } from 'react-redux';

//  const YourComponent = () => {
//     Use the useSelector hook to access the Redux state
//    const user = useSelector((state) => state.user);

//     Now, you can access individual properties of the user object
//    const { fullname, email, password, date, gender } = user;
//    console.log("Hello")

//    return (
//      <div>
//          <h1>Hello</h1>
//        <h2>User Information</h2>
//        <p>Full Name: {fullname}</p>
//        <p>Email: {email}</p>
//        <p>Password: {password}</p>
//        <p>Date of Birth: {date}</p>
//        <p>Gender: {gender}</p>
//      </div>
//    );
//  };

//  export default YourComponent;

import React from 'react'
import { useSelector } from 'react-redux';

function YourComponent() {
   const user = useSelector((state) => state.user);
   const { fullname, email, password, date, gender } = user;
   console.log("Hello")


  return (
    <div>
         <h1>Hello</h1>
       <h2>User Information</h2>
       <p>Full Name: {fullname}</p>
       <p>Email: {email}</p>
       <p>Password: {password}</p>
       <p>Date of Birth: {date}</p>
       <p>Gender: {gender}</p>
     </div>
  )
}

export default YourComponent

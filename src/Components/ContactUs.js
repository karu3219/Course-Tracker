import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(()=>{
    document.title="Contact Us";
},[]);
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Name: Kartik Patil</p>
      <p>Email: kartikpatil3219@gmail.com</p>
      <p>Phone: 8431947809</p>
    </div>
  );
};

export default ContactUs;
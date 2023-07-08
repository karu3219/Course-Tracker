import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(()=>{
      document.title="About Us";
    },[]);
    return (
      <div>
        <h1>About Us</h1>
        <p>Welcome to our Course Tracker App!</p>
        <p>
          Our mission is to provide a user-friendly platform for managing and tracking your courses. With our app, you can easily organize your courses, keep track of important deadlines, and stay on top of your learning goals.
        </p>
        <p>
          Whether you're a student, professional, or lifelong learner, our Course Tracker App is designed to help you stay organized and make the most out of your learning journey.
        </p>
        <p>
          Thank you for choosing our app. We hope it enhances your learning experience!
        </p>
      </div>
    );
  };
  
  export default AboutUs;
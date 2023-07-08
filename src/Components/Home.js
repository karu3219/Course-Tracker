
import React, { useEffect } from 'react';

function Home()
{
    {/*tab title setting */}
    useEffect(()=>{
        document.title=("Home");
    },[]);
    return(
        <div>
            <h1>Welcome to Course Tracker</h1>
            <p>
                Welcome to our Course Tracker App! This app is designed to help you keep track of your courses and manage your learning journey effectively.
            </p>
            <p>
                With Course Tracker, you can easily organize your courses, set goals, track your progress, and never miss important deadlines. Stay on top of your learning and achieve your educational objectives with our intuitive and user-friendly interface.
            </p>
            <p>
                Start using Course Tracker today and unlock the full potential of your learning experience!
            </p>
        </div>
    );
}
export default Home;
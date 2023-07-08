import React, {useEffect, useState} from 'react';
import req_url from '../URL/Request_Link';
import axios from 'axios';
import Course from './Course';
import { toast } from 'react-toastify';

const Allcourses=()=>
{
    useEffect(()=>{
        document.title="View Courses";
        getAllCourses();
    },[]);

    // to get All courses from server
    const getAllCourses=()=>{
        axios.get(`${req_url}/courses`).then((response)=>{
            // toast.success("success", { position: "bottom-center"});
            setCourses(response.data);
        },
        (error)=>{
            console.log(error);
            toast.error("went wrong" , { position: "bottom-center"});
        }
        );

    }

    const [courses,setCourses] = useState([]);
    // function to delete course in UI automatically
    const deleteCourseById = (id) =>
    {
        setCourses(courses.filter((c) => c.id!=id));
    }

    // function to update course in UI automatically
    const updateCourseById = (id,name,desc) =>
    {
        const courseToUpdate = courses.find((course) => course.courseId === id);

        if (courseToUpdate) 
        {
            courseToUpdate.courseName = name;
            courseToUpdate.description = desc;
        }
    }
    return(
        // to get all courses
        <div ClassName="text-center">
            <h1>All Courses</h1>
            {
                courses.length>0?courses.map((item)=><Course key={item.id} Course={item} update={deleteCourseById} setCourse={updateCourseById} />):"No Courses"
            }
        </div>
    );
}
export default Allcourses;
import React, { useEffect, useState } from 'react';
import {Button, Container, Form, FormGroup, Input } from 'reactstrap';

import axios from 'axios';
import req_url from '../URL/Request_Link';
import { toast } from 'react-toastify';
function AddCourses()
{
    useEffect(()=>{
        document.title="Add Courses";

    },[]);

    // declared empty course type array to store user input
    const[course, setCourse] = useState({});

// Handled Form after clicking add course 
    const handleform = (e) => {
        console.log(course);
        addCourseInServer(course);
        e.preventDefault();
        
    }

    // function to add data in a server permanently
    const addCourseInServer = (new_course) =>{
        axios.post(`${req_url}/courses`,new_course).then(
            (response)=>{
                console.log(response);
                toast.success("added successfully")
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong");
            })
    }

    return(
        <fragment>
            {/* form to take io for adding course */}
            <Form onSubmit={handleform}>
                    <h1 className="text-center my-3">Fill Course Details</h1>
                <FormGroup>
                    <label for="CourseId">CourseId</label>
                    <Input type="text" placeholder='ex: 1034,1154..' name="CourseId" Id="courseId" onChange={(e)=>{
                        setCourse({...course, courseId:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="CourseName">Course Name</label>
                    <Input type="text" placeholder='ex:Java,DBMS,..' name="courseName" id="courseName" onChange={(e)=>{
                        setCourse({...course, courseName:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="desc">Course Description</label>
                    <Input type="textarea" placeholder='Enter Description' name="description" id="desc" onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}/>
                </FormGroup>
                <Container>
                    <Button type="submit" color='success'>Add Course</Button>
                    <Button type="reset" color='warning ml-3' style={{ marginLeft: '.5rem' }}>Clear</Button>
                </Container>
            </Form>
        </fragment>
    );
}
export default AddCourses;
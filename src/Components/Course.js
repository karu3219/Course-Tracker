import axios from 'axios';
import React, { useState } from 'react';

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
}
from 'reactstrap';
import req_url from '../URL/Request_Link';
import { toast } from 'react-toastify';

const Course=({Course, update,  setCourse })=>
{
    {/* sending delete request(API call) */}
    const deleteCourse = (id)=>{
        axios.delete(`${req_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted Successfully");
                update(id);
            },
            (error)=>{
                toast.error("Error! Internal Server Error");
            }
        )
    }
    
    {/* sending update request(API call) */}
    const updateCourse = (id,name,desc,acName,acDesc) =>{
        axios.put(`${req_url}/courses/${id}/${name}/${desc}`).then(
            (response)=>{
                toast.success("updated successfully");
                setCourse(id,name,desc);
            },
            (error)=>{
                toast.error("went wrong! Please Try Again")
            }
        )
    }
    var title;
    var desc;

    const handleTextChange = (event) => {
        console.log(event.target.innerText+" text");
        title=event.target.innerText;
    };
    const handleDescChange = (event) => {
        console.log(event.target.innerText+" desc");
        desc=event.target.innerText;
    }
    return(
        // storing course details in the form of card
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold" contentEditable suppressContentEditableWarning
          onBlur={handleTextChange}><h3>{Course.courseName}</h3></CardSubtitle>
                <CardText contentEditable suppressContentEditableWarning 
                onBlur={handleDescChange}>{Course.description}</CardText>
                <Container>
                    <Button color="danger" style={{marginRight:'.5rem'}} onClick={()=>
                    {
                        deleteCourse(Course.courseId);
                    }}>Delete</Button>
                    <Button color="warning" style={{ marginLeft: '.5rem' }} onClick={()=>{
                        updateCourse(Course.courseId,title,desc,Course.courseName,Course.description);
                    }} >Update</Button>
                </Container>
            </CardBody>
        </Card>
        
    );
}
export default Course;
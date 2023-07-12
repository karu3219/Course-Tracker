package com.restAPIusingJPA.restAPIusingJPA.service;

import java.util.List;
import com.restAPIusingJPA.restAPIusingJPA.entities.Course;

public interface CourseService 
{
	public List<Course> getCourses();
	public Course getCourse(long courseId);
	public int addCourse(Course course);
	public int updateCourse(long courseId,String courseName, String description);
	public Course deleteCourse(long courseId);

	
}

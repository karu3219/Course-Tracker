package com.restAPIusingJPA.restAPIusingJPA.service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restAPIusingJPA.restAPIusingJPA.daolayer.CourseDAO;
import com.restAPIusingJPA.restAPIusingJPA.entities.Course;

@Service
public class CourseServiceImpl implements CourseService 
{
	@Autowired
	CourseDAO dao;
	public List<Course> getCourses()
	{
		return dao.findAll();
	}
	public Course getCourse(long courseId)
	{
		return dao.findById(courseId).get();
	}
	public int addCourse(Course course)
	{
		dao.save(course);
		return 1;
	}
	public int updateCourse(long courseId,String courseName,String description)
	{
		Course c = dao.findById(courseId).get();
		if(!courseName.equals("undefined"))
		c.setCourseName(courseName);
		
		if(!description.equals("undefined"))
		c.setDescription(description);
		dao.save(c);
		return 1;
	}
	public Course deleteCourse(long courseId)
	{
//		@SuppressWarnings("deprecation")
		Course c = dao.findById(courseId).get();
		dao.delete(c);
		return c;
	}
}

package com.restAPIusingJPA.restAPIusingJPA.container;

import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restAPIusingJPA.restAPIusingJPA.entities.Course;
import com.restAPIusingJPA.restAPIusingJPA.service.CourseService;

@RestController
public class MyController 
{
	@Autowired
	private CourseService cs;

	@GetMapping("/courses")
	@CrossOrigin(origins = "http://localhost:3000/")
	public List<Course> getCourses()
	{
		try
		{
			return cs.getCourses();
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	@GetMapping("/courses/{courseId}")
	@CrossOrigin(origins="http://localhost:3000/")
	public Course getCourse(@PathVariable String courseId)
	{
		try
		{
			return cs.getCourse(Long.parseLong(courseId));
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			return null;
		}
	}
	@PostMapping("/courses")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<HttpResponse> addCourse(@RequestBody Course course)
	{
		try
		{
			cs.addCourse(course);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/courses/{courseId}/{courseName}/{description}")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<HttpResponse> updateCourse(@PathVariable("courseId") String courseId, @PathVariable("courseName") String courseName, @PathVariable("description") String description)
	{
		try
		{
			cs.updateCourse(Long.parseLong(courseId),courseName, description);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@DeleteMapping("/courses/{courseId}")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<HttpResponse> deleteCourse(@PathVariable String courseId)
	{
		try
		{
			cs.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

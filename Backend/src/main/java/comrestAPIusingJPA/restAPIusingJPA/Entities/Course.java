package com.restAPIusingJPA.restAPIusingJPA.entities;
//import javax.persistence.Entity;
//import javax.persistence.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long courseId;
	private String courseName;
	private String description;
	public Course()
	{
		super();
	}
	public Course(long courseId,String courseName, String description)
	{
		super();
		this.courseId=courseId;
		this.courseName=courseName;
		this.description=description;
	}
	public long getCourseId() {
		return courseId;
	}
	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", description=" + description + "]";
	}
}

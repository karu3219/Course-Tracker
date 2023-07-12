package com.restAPIusingJPA.restAPIusingJPA.daolayer;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;

import com.restAPIusingJPA.restAPIusingJPA.entities.Course;

public interface CourseDAO extends JpaRepository<Course,Long>{

}

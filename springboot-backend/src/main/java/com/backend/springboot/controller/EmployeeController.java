package com.backend.springboot.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springboot.exception.ResourceNotFoundException;
import com.backend.springboot.model.Employee;
import com.backend.springboot.repository.EmployeeRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	@PostMapping
	public Employee creatEmployee (@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	@GetMapping("{id}")
	public ResponseEntity<Employee>  getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" +id));
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id , @RequestBody Employee employeeDetails){
		Employee updatedEmployee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" +id));
		updatedEmployee.setFirstName(employeeDetails.getFirstName());
		updatedEmployee.setLastName(employeeDetails.getLastName());
		updatedEmployee.setEmailId(employeeDetails.getEmailId());
		employeeRepository.save(updatedEmployee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+id));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

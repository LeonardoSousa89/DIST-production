package dist.com.dstprojectapplication.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dist.com.dstprojectapplication.model.User;
import dist.com.dstprojectapplication.projection.WorkersProjection;
import dist.com.dstprojectapplication.service.UserService;

@RestController
@RequestMapping(value = "/dist/worker")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping(value = "/user-account/{id}/administration")
	private ResponseEntity<Optional<User>> getAccountCredentials(@PathVariable String id){
		Optional<User> user = service.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	
	@PostMapping(value = "/user-account/administration")
	private ResponseEntity<Object> createAccount(@RequestBody User account){
		service.createAccount(account);
		return ResponseEntity.status(HttpStatus.CREATED).body("Account successfully created");
	}

	@GetMapping(value = "/{id}/administration")
	private ResponseEntity<Page<WorkersProjection>> findByUserData(@PathVariable String id,  
																   @RequestParam(value = "page",  required = false,  defaultValue = "0") int page,
																   @RequestParam(value = "size",  required = false, defaultValue = "10") int size){
		PageRequest pageRequest = PageRequest.of(page, size);
		Page<WorkersProjection> employee = service.findByUserData(id, pageRequest);
		return ResponseEntity.status(org.springframework.http.HttpStatus.OK).body(employee);
	
	}
	
}

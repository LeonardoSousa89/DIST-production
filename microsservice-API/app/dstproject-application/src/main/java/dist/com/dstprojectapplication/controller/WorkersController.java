package dist.com.dstprojectapplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dist.com.dstprojectapplication.model.Workers;
import dist.com.dstprojectapplication.service.WorkersService;

@RestController
@RequestMapping(value = "/dist/worker")
public class WorkersController {

	@Autowired
	private WorkersService service;
	
	@PostMapping(value = "/administration")
	public ResponseEntity<Object> insertWorker(@RequestBody Workers worker){
		service.insertWorker(worker);
		return ResponseEntity.status(HttpStatus.CREATED).body("Worker created.");
	}
	
}

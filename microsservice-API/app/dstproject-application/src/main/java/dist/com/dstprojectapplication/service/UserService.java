package dist.com.dstprojectapplication.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import dist.com.dstprojectapplication.model.User;
import dist.com.dstprojectapplication.projection.WorkersProjection;
import dist.com.dstprojectapplication.repository.UserRepository;
import dist.com.dstprojectapplication.repository.WorkersRepository;
import dist.com.dstprojectapplication.service.exceptions.ResourceBadRequestException;
import dist.com.dstprojectapplication.service.exceptions.ResourceNotFoundException;



@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	
	
	@Autowired
	private WorkersRepository workersRepository;
	
	
	
	public Optional<User> findById(String id){
		
		Optional<User>  user = repository.findById(id);
		
		if(user == null) {
			throw new ResourceNotFoundException("User not found.");
		}
		
		return user;
	}
	
	
	
	public User createAccount(User account) {
		try {
			return repository.save(account);
		}catch (Exception e) {
			throw new ResourceBadRequestException(" Was an error, verify if some field is empty or perhaps your email already exists");
		}
	}
	
	
	
	public Page<WorkersProjection> findByUserData(String id,  PageRequest pageRequest) {
		
		Page<WorkersProjection> employee = workersRepository.findByUserData(id, pageRequest);

		if(employee.isEmpty()) {
			
			throw new ResourceNotFoundException("Resource not found.");
			
		}
		
		return employee;	
	}
	
}

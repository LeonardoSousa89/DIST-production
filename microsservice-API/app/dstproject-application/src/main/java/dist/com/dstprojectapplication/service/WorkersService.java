package dist.com.dstprojectapplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dist.com.dstprojectapplication.model.Workers;
import dist.com.dstprojectapplication.repository.WorkersRepository;
import dist.com.dstprojectapplication.service.exceptions.ResourceBadRequestException;

@Service
public class WorkersService {
	
	@Autowired
	private WorkersRepository repository;
	
	public Workers insertWorker(Workers worker) {
		try {
			return repository.save(worker);
		}catch (Exception e) {
			throw new ResourceBadRequestException(" Was an error, verify if some field is empty or perhaps your email already exists");
		}
	}
	
}

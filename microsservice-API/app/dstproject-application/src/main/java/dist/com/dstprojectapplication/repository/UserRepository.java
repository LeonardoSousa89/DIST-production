package dist.com.dstprojectapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dist.com.dstprojectapplication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
	
	
}
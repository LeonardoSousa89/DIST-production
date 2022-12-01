package dist.com.dstprojecteurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DstprojectEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(DstprojectEurekaServerApplication.class, args);
	}

}

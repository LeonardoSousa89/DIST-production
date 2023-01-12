![alt text](/assets/DIST.png)
[<h1>Dist&reg;</h1>]()

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeonardoSousa89/DIST-project_development/blob/main/LICENSE.LICENSE) 

### State
- node-api

### get project
- requirements: 
  - node 14

### git:

```bash
git clone -b node-api https://github.com/LeonardoSousa89/DIST-production.git

```

### docker:

- container:

```bash
sudo docker run -d -p 8766:8766 --name app -e PROD_CLIENT=your_prod_client_db -e PROD_HOST=your_prod_host_db -e PROD_DB=your_prod_db -e PROD_USER_DB=your_prod_user_db -e PROD_PASSWORD_DB=your_prod_password_db leozin89/dist-node-api:v1
```

- service on swarm:
```bash
 sudo docker service create -p 8766:8766 --name node-api -e PROD_CLIENT=your_prod_client_db -e PROD_HOST=your_prod_host_db -e PROD_ DB=your_prod_db -e PROD_USER_DB=your_prod_user_db -e PROD_PASSWORD_DB=your_prod_password_db leozin89/dist-node-api:v1
```

# CI/CD

- tecnology:
	- jenkins
	
- pipeline with docker: 

```
 pipeline {
    agent any 

    //read the doc: https://www.jenkins.io/doc/book/pipeline/docker/
    stages {
     
        stage('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("docker_username/docker_repo:${env.BUILD_ID}")
                }
            }
        }

        //dockerhub** reference a credentials ENV saved in manager credentials in jenkins
        stage('push Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub'){
                        dockerapp.push("latest")
                        dockerapp.push("${env.BUILD_ID}")
                     }
                }
            }
        }

        stage('Deploy Container Image on Server') {
            steps {
                   sh 'docker run -d -p 8766:8766 --name app -e PROD_CLIENT=your_prod_client_db -e PROD_HOST=your_prod_host_db -e PROD_DB=your_prod_db -e PROD_USER_DB=your_prod_user_db -e PROD_PASSWORD_DB=your_prod_password_db leozin89/dist-node-api:latest'
            }
        }

        
    }

}
```

- pipeline with docker running mode swarm:

```
 pipeline {
    agent any 

    //read the doc: https://www.jenkins.io/doc/book/pipeline/docker/
    stages {
     
        stage('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("docker_username/docker_repo:${env.BUILD_ID}")
                }
            }
        }

        //dockerhub** reference a credentials ENV saved in manager credentials in jenkins
        stage('push Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub'){
                        dockerapp.push("latest")
                        dockerapp.push("${env.BUILD_ID}")
                     }
                }
            }
        }

        stage('Deploy Container Image on Server') {
            steps {
                   sh 'docker service create -p 8766:8766 --name node-api -e PROD_CLIENT=your_prod_client_db -e PROD_HOST=your_prod_host_db -e PROD_ DB=your_prod_db -e PROD_USER_DB=your_prod_user_db -e PROD_PASSWORD_DB=your_prod_password_db leozin89/dist-node-api:latest'
            }
        }

        
    }

}
```

# Author

Leonardo Sousa



https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/

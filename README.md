
![alt text](/assets/DIST.png)
[<h1>Dist&reg;</h1>]()


[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeonardoSousa89/DIST-project_development/blob/main/LICENSE.LICENSE) 

## Hi 👋
### State
- fase II

## About project
- 🔭 This app simulating a logistics activities, create routes to delivery, insert worker, vehicles,
list elements and payment services.
Your development wll be serve, to show my skills and learning about
many kind of tecnologies, techniques to build software and think how to solve problems.


# Application arquitecture
![alt text](/assets/arquitecture.png)

# Url Link
- App Frontend:[<a href="https://dist-project.netlify.app/signup"> main page</a>]()
- App Backend:[<a href="http://DIST-1812480901.us-east-1.elb.amazonaws.com:8765/dstproject-application/dist/worker/administration"> main route</a>]()
- App Mobile:[<a href="https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1"> google play store</a>]()

# Api documentation

- API documentation
	- OBS* the user account credentials must be got by firebase-auth and transferr to spring-cloud API
	- [<a href="https://app.swaggerhub.com/apis-docs/Leo.Team89/DIST/2.0#/">documentation</a>]()

# Recomended extensions (browser chrome)

- [<a href="https://chrome.google.com/webstore/detail/swagger-viewer/nfmkaonpdmaglhjjlggfhlndofdldfag">SWAGGER-viewer</a>]()
- [<a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">JSON Formatter</a>]()

# Technologies and Resources

### Design
- [<a href="https://www.figma.com/file/VHlRlB0IctNxuOElcFC0As/DIST-project?node-id=0%3A1">figma project</a>]()
- draw.io

### OS
- windows
- linux

### Text editors
- vsCode
- sts 4
- notepad ++

### Project management
- trello
- swagger

### Database technologies
- postgres

### Frontend technologies
- react

### Backend technologies
- java
- spring-boot
	- jpa
	- hibernate
- spring-cloud
	- eureka-server
	- zull
	
### mobile tecnologies
- react-native

### DevOps technologies
- aws ec2
- aws rds
- docker
- netlify

### Version control technologies
- git
- github

### get project
- requirements: 
  - java 11
  - node 16
  - react 18.2
  - react-native
    - expo 46.0

### git:

```bash
git clone -b faseII https://github.com/LeonardoSousa89/DIST-production.git

```

### docker-swarm:

- first create a docker-compose.yaml:

```bash
version: '3.9'

services:
  dstproject-application:
    image: leozin89/dstproject-application:v5
    environment:
      - DB=your_db
      - USER_DB=your_user_db
      - PASSWORD_DB=your_password_db
    ports:
      - 8762:8762
    networks:
      - distnetworkcluster
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.25'
          memory: 256M
      restart_policy:
        condition: on-failure

  visualizer:
    image: dockersamples/visualizer
    ports:
      - 8080:8080
    networks:
      - distnetworkcluster
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '0.25'
          memory: 256M
      restart_policy:
        condition: on-failure
      placement:
        constraints:
          - node.role == manager

networks:
  distnetworkcluster:
    driver: overlay
    ipam:
      config:
        - subnet: 172.16.238.0/24
```

- in your instance after install docker

```bash
sudo docker swarm init 
```

- get the join code created to insert in others instances at the cluster (insert a sudo command)
```bash 
EX:  sudo docker swarm join --token SWMTKN-1-1tp5cgcittlmhimcjewcw4zhlo45cs9l36xatwpcvy9eqtnj5k-dj4ukw9w61tf0zz2qog4tu409 172.31.82.24:2377
```

- to run docker-swarm orquestred containers and services use this command:
```bash
sudo docker stack deploy --compose-file docker-compose.yaml dist
```

- get the ipv4 address of application container and insert into api gateway zull proxy env args HOST
```bash
sudo docker service ls 
```

```bash
sudo docker ps 
```

```bash
sudo docker inspect dstproject-application_id 
```

```bash
sudo docker service create --name dstproject-api-gateway --replicas 3 --network dist_distnetworkcluster -p 8765:8765 --memory 256M --cpus=0.25 -e HOST=dstproject-application-ipv4-address leozin89/dstproject-api-gateway:v6
```

# Author

Leonardo Sousa



https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/
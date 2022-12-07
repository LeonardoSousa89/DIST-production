
![alt text](/assets/DIST.png)
[<h1>Dist&reg;</h1>]()


[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeonardoSousa89/DIST-project_development/blob/main/LICENSE.LICENSE) 

## Hi 👋
### State
- fase I

## About project
- 🔭 This app simulating a logistics activities, create routes to delivery, insert worker, vehicles,
list elements and payment services.
Your development wll be serve, to show my skills and learning about
many kind of tecnologies, techniques to build software and think how to solve problems.


# Application arquitecture
![alt text](/assets/arquitecture.png)

# Url Link
- App Frontend:[<a href="https://www.distproject.com.br"> site url</a>]()
- App Backend:[<a href="https://www.distproject-api.com.br"> API url</a>]()
- App Mobile:[<a href="https://drive.google.com/drive/folders/1XpKr7JwtjR6C3-so_2ZYETvIsfRrMeSG"> get the APK</a>]()

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
- aws elb
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
git clone https://github.com/LeonardoSousa89/DIST-production.git

```

### docker:
```bash
sudo docker network create --subnet=your.IP.main/CIDR --gateway=your.IP distnetwork &&
sudo docker run -d --name dstproject-eureka-server --network distnetwork -p 8761:8761 --ip your.IP --memory 256M --cpus=0.2 leozin89/dstproject-eureka-server:v2 &&
sudo docker run -d --name dstproject-api-gateway   --network distnetwork -p 8765:8765 --ip your.IP --memory 256M --cpus=0.2 leozin89/dstproject-api-gateway:v4 &&
sudo docker run -d --name dstproject-application   --network distnetwork -p 8762:8762 --ip your.IP --memory 256M --cpus=0.2 -e DB=your_db_url -e USER_DB=your_db_username -e PASSWORD_DB=your_db_password leozin89/dstproject-application:v4
```

### Monitoring containers
- docker-visualizer
```bash
sudo docker run -it -d -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock dockersamples/visualizer

```

# Author

Leonardo Sousa



https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/
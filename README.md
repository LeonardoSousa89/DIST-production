![alt text](/assets/DIST.png)
[<h1>Dist&reg;</h1>]()

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeonardoSousa89/DIST-project_development/blob/main/LICENSE.LICENSE) 

## Hi 👋
### State
- node-api

## About project
- 🔭 This app simulating a logistics activities, create routes to delivery, insert worker, vehicles,
list elements and payment services.
Your development wll be serve, to show my skills and learning about
many kind of tecnologies, techniques to build software and think how to solve problems.

# Application arquitecture
![alt text](/assets/arquitecture.png)

# Url Link
- App Frontend:[<a href="https://www.distproject.com.br"> site</a>]()
- App Backend:[<a href="https://www.distproject-api.com.br"> API</a>]()
- App Mobile:[<a href="https://drive.google.com/drive/folders/1XpKr7JwtjR6C3-so_2ZYETvIsfRrMeSG?usp=share_link"> get the APK *[get permision to android make install this app on your device]</a>]()

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

### Tests
- postman

### Project management
- trello
- swagger

### Database technologies
- postgres

### Frontend technologies
- react

### Backend technologies
- node
	
### mobile tecnologies
- react-native
- expo

### Cloud computing and DevOps technologies
- aws ec2
- aws elb
- aws rds
- aws manager credentials
- aws route 53
- docker
- docker-compose
- docker-swarm
- netlify

### Version control technologies
- git
- github

### get project
- requirements: 
  - node 14
  - react 18.2
  - react-native
    - expo 46.0.17

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

# Author

Leonardo Sousa



https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/

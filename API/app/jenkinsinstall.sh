# first install the docker and git
sudo apt update -y && sudo apt install git && 
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && 
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && 
sudo apt update && apt-cache policy docker-ce && sudo apt install docker-ce -y && clear

#second install openJdk
sudo apt update && sudo apt install default-jre &&
sudo apt install default-jdk && clear

#now install jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add - &&
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list' &&
sudo apt update && sudo apt install jenkins && clear

#verify the status
sudo systemctl status jenkins

#if not is iniatilized
sudo systemctl start jenkins

#restart jenkins service
sudo systemctl restart jenkins

#if use docker got the permissions
sudo usermod -aG docker jenkins

#get the jenkins password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

#if you need work with ssh integrated a private repository on github or other use it
ssh-keygen -t rsa -b 4096

#plugins

    #docker:
        # docker
        # docker-pipeline
    
    #kubernets:
        # kubernets-cli

FROM openjdk:11

VOLUME /tmp

EXPOSE 8765  

ADD ./target/dstproject-eureka-server-0.0.1-SNAPSHOT.jar leozin89/dstproject-eureka-server.jar

ENTRYPOINT ["java","-jar","leozin89/dstproject-eureka-server.jar"]


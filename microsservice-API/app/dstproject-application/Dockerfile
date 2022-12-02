FROM openjdk:11

VOLUME /tmp

EXPOSE 8765  

ADD ./target/dstproject-application-0.0.1-SNAPSHOT.jar leozin89/dstproject-application.jar

ENTRYPOINT ["java","-jar","leozin89/dstproject-application.jar"]


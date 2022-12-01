FROM openjdk:11

VOLUME /tmp

EXPOSE 8765  

ADD ./target/dstproject-api-gateway-0.0.1-SNAPSHOT.jar leozin89/dstproject-api-gateway.jar

ENTRYPOINT ["java","-jar","leozin89/dstproject-api-gateway.jar"]


# A two Stage Dockerfile with a build stage and a run -stage!
FROM maven:3.8.5-openjdk-17-slim as backend-build
WORKDIR /app
COPY pom.xml .
### Step 2 Copy the source and build the .jar
COPY src ./src
RUN ls -laR
# we run first a build
RUN mvn clean install -DskipTests

#CMD mvn clean spring-boot:run
### Stage 2 - Let's build a minimal image with the "deployable package"
FROM openjdk:17-slim
RUN echo alpine->jdk17
#WORKDIR /app-service
#add a bash shell to the image
#RUN apk add --no-cache bash
# we add the jar to the working dir and execute it!
COPY --from=backend-build /app/target/trips-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
# Define an Entry-startpoint of the image
#ENTRYPOINT ["sh", "-c", "java -jar app.jar"]
# Entrypoint
ENTRYPOINT ["java", "-jar", "trips-0.0.1-SNAPSHOT.jar"]

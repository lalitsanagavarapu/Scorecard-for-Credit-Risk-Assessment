# Scorecard-for-Credit-Risk-Assessment
UI Layer and also CRUD functionality for Characteristic and Configuration screen

## Write-up of my work Till date
https://gist.github.com/SupreethSudhakaranMenon/557660bfad089de12d3befb6d71a627d

 ## Installation
Just import it to your IDE and build the project to resolve the dependencies. 

## Database Configuration
Create a MySQL database with the name `springbootdb` and add credentials to `/resources/application.properties`  
The Default ones are :  

`spring.datasource.url=jdbc:mysql://localhost:3306/springbootdb`    
`spring.datasource.username=root`    
`spring.datasource.password=`    
`spring.jpa.hibernate.ddl-auto=update`    

## Server port Configuration  
Add this small snippet in this file `/resources/application.properties`  

`server.port = 7777`  
**"Server port number can be changed."**  
Also the port number should be changed in functions.js file to view details of features and configurations.

## Usage  
Still under construction , some features may not work.  
Run the project through IDE and head out to the `localhost` port as set by you.  

## Configuring Project SDK  
While importing to your IDE and making it to run , if the Build fails because of the Project SDK then, follow the below steps.**in IntelliJ**
1. Go to File menu. 
2. In the File menu , select Project Structure.  
3. A Project Structure window appears on the screen.  
4. In that window, under **Platform Settings** select **SDK's**.  
5. Now , you can delete the present **SDK** version and under **Project Settings** select **Project**.  
6. In **Project SDK** select the SDK again.




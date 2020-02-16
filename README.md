# Paypal_Midterm_Assignment
MidTerm Assignment for PayPal VAP course in VIT Chennai

# Index  
1. [Dependencies](#dependencies)  
2. [Usage](#usage)  
3. [About](#about)  
4. [Concepts used from VAP](#concepts-used-from-vap)  
5. [Difficulties Faced](#difficulties-faced)  
6. [ScreenShots](#screenshots)  
7. [Credits](#assignment-by)  

# Dependencies
- npm install express  
- npm install body-parser  
- npm install pug  
- npm install node-fetch  
- npm install nodemon  

# Usage
- nodemon midterm-assignment.js 
- open in browser https://localhost:8080/home to start the app   
- the login button will popup a login screen  
- enter any credentials to login  
- add courses according to wish  
- click on courses to add them (tick mark will come)  
- click on x to delete courses  

# About

On editing courses.json you can define courses list that are already available on portal  
The implemented app enables the user to login into the course subscription platform and  
either choose from the already offered courses or add new courses according to the needs  
of the user. Here the user can be a student or a professor  

# Concepts Used from VAP

- Express js Framework
- Use of Promises
- Use of PUG HTML Template Generating Engine
- Event listeners and handlers

# Difficulties Faced

Working with session variables to store login information and perform authentication based on students.json - (Not implemented)  
Adding inline scripts in pug templates - (implemented)  
Adding inline styling in pug templates - (implemented)  
Adding an image from local file using src attribute in pug template - (Not implemented)  

# ScreenShots

![image](https://user-images.githubusercontent.com/42300415/74602102-72090b80-50cb-11ea-8a7a-8a983f36dfd5.png)  
  
Login Page  
  
![image](https://user-images.githubusercontent.com/42300415/74602116-9a910580-50cb-11ea-9d20-0c642319249c.png)  
  
Login Popup Screen  
    
![image](https://user-images.githubusercontent.com/42300415/74602130-b3012000-50cb-11ea-9e7f-414b53160695.png)  
  
Default Courses from courses.json  
  
![image](https://user-images.githubusercontent.com/42300415/74602144-cf9d5800-50cb-11ea-8d60-16fed793f9d6.png)  
  
Add Courses not in list  
  
![image](https://user-images.githubusercontent.com/42300415/74602150-db891a00-50cb-11ea-87d1-f6a348ee8fa5.png)  
  
Course Added Successfully  
  
![image](https://user-images.githubusercontent.com/42300415/74602157-eba0f980-50cb-11ea-8083-1a2d531f855e.png)  
  
Subscribe to courses as per requirement  
  
![image](https://user-images.githubusercontent.com/42300415/74602164-f9ef1580-50cb-11ea-9cdb-6c56b8832d4a.png)  
  
Delete unwanted courses  
  
![image](https://user-images.githubusercontent.com/42300415/74602102-72090b80-50cb-11ea-8a7a-8a983f36dfd5.png)  
  
Logout to go back to home page   

# Assignment By
Gariman Gupta 17BCE1016  
Vellore Institute of Technology  
Published on 16-02-2020  

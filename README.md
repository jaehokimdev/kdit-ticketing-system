# KDIT Ticketing System

## What project is it?

> This web application is Ticketing System for IT solution company. I created this project in the fourth semester of college <a href="https://www.sait.ca/programs-and-courses/diplomas/information-technology" target='_blank'>(SAIT)</a>.

## Homepage

<a href="http://kdit.thejaehokim.com" target='_blank'>KDIT-Ticketing-System</a>

## Languages

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![REDUX](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![STYLED-COMPONENTS](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![MATERIAL-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![MYSQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Functionality

- ### Authentication:

  #### Login
    To log in to the application use the email/password input boxes and Click “Login” when finished.
    
    <p align="center"><img src="./screenshots/1.png" width="80%" /></p>
    
  #### Logout
    To log out of the application click the “Logout” button located in the navigation bar on the left-hand side of the application. 
    
    <p align="center"><img src="./screenshots/11.png" width="50%" /></p>

* ### Dashboard:

  #### Regular Users
  
  *	Regular Users can view the status of tickets assigned to them
    * Total, Open In Progress, Pending Solved and Closed
    * Pie Chart
      *	Tickets By Status
        
    <p align="center"><img src="./screenshots/12.png" width="80%" /></p>
    
  #### Manager
  
  *	Managers can view the status of tickets for the company
    * Total, Open In Progress, Pending Solved and Closed
    * Pie Chart
      *	Tickets By Status
        
    <p align="center"><img src="./screenshots/13.png" width="80%" /></p>
    
  #### Admin/Agents
  
  *	Admins/Agents can view the status of tickets from all companies as well as tickets by clients
    * Total, Open In Progress, Pending Solved and Closed
    * Pie Chart
      *	Tickets By Status
      * Tickets By Client
      
    <p align="center"><img src="./screenshots/14.png" width="80%" /></p>  
  

* ### Tickets:

  #### Ticket Main Page

    <p align="center"><img src="./screenshots/3.png" width="80%" /></p>  

  #### Viewing Tickets
  
  * Navigate to the Tickets page using the navigation on the left-hand side.
  * Find the desired ticket using the search/filter features.

    <p align="center"><img src="./screenshots/15.png" width="80%" /></p>  
    
  * Click on the desired ticket.
  * Users can view the ticket details:
    * Title, Date Opened, Content (Details), Status, Category, Priority and Comments 

  #### Adding Comments
  
  * Use the Text Box to type out response/comment.
  * Click Add Comment submit the response.

    <p align="center"><img src="./screenshots/4.png" width="80%" /></p>  
    <p align="center"><img src="./screenshots/5.png" width="80%" /></p>  
    
  #### Changing Status/Category

  * Note: This feature can only be used by Admins and Agents.
	* In the upper left-hand corner use the drop down menus to change the Status/Category:
	  * Selection for Status:
	    * OPEN
	    * IN PROGRESS
	    * SOLVED
	    * CLOSED
	    * PENDING

   <p align="center"><img src="./screenshots/17.png" width="40%" /></p>  
   
    * Selection for Category:
	    * REQUEST
	    * BUG
	    * DEFECT
	    * SUPPORT
	    * ENHACEMENT

   <p align="center"><img src="./screenshots/18.png" width="40%" /></p>
   
   #### Creating a Ticket
   
   * Note: This feature only applies to Managers and Regular Users.
    * Navigate to the Tickets page using the navigation on the left-hand side.
    * Find the desired ticket using the search/filter features.
    
   <p align="center"><img src="./screenshots/15.png" width="80%" /></p>
    
    * Click the Add New Ticket button (can be found on the tickets page).

   <p align="center"><img src="./screenshots/19.png" width="80%" /></p>

    * Enter the title of the ticket.

   <p align="center"><img src="./screenshots/8.png" width="80%" /></p>
  
    * Select the category of the ticket using the Category dropdown menu.
      * Possible selections include:
        * REQUEST
	      * BUG
	      * DEFECT
	      * SUPPORT
	      * ENHACEMENT

   <p align="center"><img src="./screenshots/20.png" width="40%" /></p>
   
    * Select the priority of the ticket using the Priority dropdown menu.
      * Possible selections include:
        * LOW
	* NORMAL
	* HIGH
	* CRITICAL

   <p align="center"><img src="./screenshots/21.png" width="40%" /></p>
   
    * Create a description.
      * Using the Detail text box input a description of the current ticket.

    * Submitting the ticket.
      * To create the ticket ensure that all fields have been filled and completed.
      * Once complete, click Create Ticket to submit the ticket. 

   <p align="center"><img src="./screenshots/22.png" width="40%" /></p>
   
  #### Assign/Change Ticket Agent
    * Note: This feature is only applies to Admins
      * Simply click on the box of the respective ticket to assign/change the ticket’s agent.
      
   <p align="center"><img src="./screenshots/23.png" width="80%" /></p>

  

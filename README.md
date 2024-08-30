# READ.md Generator

## Overview
READ.md generator task would allow a user to create a READ.md file by answering questions on the integrated terminal such as, enetering your title, description, usage ,etc.


## Instructions
To begin the use of this project the user first needs to have all dependencies by running [ npm init ] , [npm install inquirer@8.2.4 ] and [ npm i ]. After the user has installed all dependecies and have noticed node modules appears then the user is now able to generate their file on the integrated terminal. 

## Tests
To ensure the user would be able to generate their READ.md file efficienly the tests ran were:
-check if all dependencies were installed
-while writing code constantly refer to documentation for syntax
-once code was written be able to run [ node index.js ] on integrated terminal o check for errors

### Reoccurring Errors
1. The first reocurring error I was encountering was that prompt.then was not a function
2. The other reocurring error was that questions parameter was not being called

### Solutions
After further research the first problem was solved after I install the proper inquirer dependency 
The second error was solved after the proper sytax was used to create the questions Array

## For the deployed URL I will be creating a READ.md with the integrated terminal and set it under the .utils folder

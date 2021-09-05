# COMP3120: Advanced Web Development
## Assignment 1
### Pompous Poems: A poetry sharing website

This project contains both the frontend and backend code for "Pompous Poems", a poetry sharing website.

This entire project was created as an assignment for the unit COMP3120: Advanced Web Development. The project was built using [React JS](https://reactjs.org/).



### Repository Structure

    ├── public    ├── index.html
    ├         
    ├── server    ├── poems.json
    ├             ├── server.js
    ├
    ├
    ├── src       ├── Components     ├── Poem.css
    ├                                ├── Poem.js
    ├                                ├── PoemForm.css
    ├                                ├── PoemForm.js
    ├
    ├
    ├
    ├
    ├
    ├             ├── Pages          ├── Add.js
    ├                                ├── Home.css
    ├                                ├── Home.js
    ├                                ├── PoemPage.js
    ├
    ├             ├── App.js
    ├             ├── App.css
    ├             ├── index.js
    ├             ├── index.css
    ├
    ├
    ├      
    ├──.gitignore
    ├──README.md
    ├──package-lock.json
    └──package.json
   


### Libraries
| Package name                                  | Description                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`react`](https://reactjs.org/)  | A JavaScript library for building user interfaces |
| [`react-router-dom`](https://github.com/remix-run/react-router)     | React Library that allows for dynamic routing. |
| [`react-dom`](https://reactjs.org/docs/react-dom.html)    | A package that provides DOM-specific methods that can be used at the top level of an app |
| [`axios`](https://axios-http.com/)    | A simple promise based HTTP client for the browser and node.js |
| [`react-markdown`](https://github.com/remarkjs/react-markdown)    | Markdown component for React using remark |
| [`express`](http://expressjs.com/)    | A minimal and flexible Node.js web application framework |
| [`cors`](https://github.com/expressjs/cors)    | A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. |



### Project Status
This project serves as a quick prototype of a poetry sharing website and it is currently limited in features.

These are the following screens and functionalities present in the application currently:
- Home Page
    - List of top 10 poetries by number of votes
- Adding Page
    - Form to input new poem
- Individual Poem Pages
    - Contains the full poem
    - Voting function 


### Custom Components

#### [Poem](individual-project-HubertHartan/src/Components)
Custom list component - Handles display of poem title as well as author.
 Used in Home page.

#### [PoemForm](individual-project-HubertHartan/src/Components)
Custom form component - Handles the input of new poems.



### Screens

#### [Home Page](individual-project-HubertHartan/src/Pages)
Displays list of poem titles with their corresponding author. 
Poem titles can be clicked to redirect to the corresponding poem page.

#### [Adding Page](individual-project-HubertHartan/src/Pages)
Input form for adding a new poem into the web application.

#### [Poem Page](individual-project-HubertHartan/src/Pages)
Displays all poem details.
Contains voting feature.


### Team Members
#### Documentation Team:
Hubert Hartan


#### Development Team:
Hubert Hartan
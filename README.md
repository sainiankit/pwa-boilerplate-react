## PWA-Boilerplate-React

**pwa-boilerplate-react** provides a boilerplate stack for a Progressive Web Application with offline-first capabilities.

**pwa-boilerplate-react** aims at providing a light-weight Progressive Web Application stack with a very intuitive structure suitable for scalable enterprise web applications.

## Audience

- pwa-boilerplate-react serves as a starter pack, for scalable enterprise web applications. Allowing it's users to straight away jump to writing the business logic.
- pwa-boilerplate-react also serves as a great tutorial for building a PWA with React and Redux.
> **Note:** Follow the code comments and @fileoverviews to get a sound understanding of the application structure and tools being used.

## What's in there? 

- React
- Redux
- Redux-Logic
- Webpack with HMR
- Babel
- Bundle Analyser
- Responsive Layout Boilerplate with antDesign
- PWA Manifest generated with webpack
- Electron Desktop Application Boilerplate
- Unit testing with Jest & Enzyme `#TODO`
- Sample Test Cases `#TODO`
- Offline First Boilerplate

## Directory Structure

**pwa-boilerplate-react** follows a very intuitive directory structure. Here is a quick look at the organization:

**Do not like it ?** Go Ahead! Change it. It's Very Adaptive.

📦src  
 ┣ 📂components  
 ┃ ┣ 📂Counter  
 ┃ ┣ 📂Logo  
 ┃ ┣ 📂Sidebar  
 ┃ ┗ 📂Todo  
 ┃ ┃ ┣ 📂container  
 ┃ ┃ ┃ ┗ 📜Todo.js  
 ┃ ┃ ┣ 📂presentational  
 ┃ ┃ ┃ ┗ 📜Todo.js  
 ┃ ┃ ┗ 📜index.js  
 ┣ 📂config  
 ┃ ┣ 📜configureStore.js  
 ┃ ┗ 📜menu.js  
 ┣ 📂constants  
 ┃ ┣ 📜actionTypes.js  
 ┃ ┣ 📜apiEndpoints.js  
 ┃ ┗ 📜index.js  
 ┣ 📂logics  
 ┃ ┣ 📜Todo.js  
 ┃ ┗ 📜index.js  
 ┣ 📂reducers  
 ┃ ┣ 📜counter.js  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜todo.js  
 ┣ 📂services  
 ┃ ┗ 📜exampleService.js  
 ┣ 📂static  
 ┃ ┗ 📂app_icons  
 ┣ 📂utils  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜request.js  
 ┣ 📂views  
 ┃ ┣ 📂Async  
 ┃ ┣ 📂Example  
 ┃ ┣ 📂Home  
 ┃ ┗ 📜routes.js  
 ┣ 📜app.js  
 ┣ 📜index.html  
 ┣ 📜index.js  
 ┣ 📜main.scss  
 ┗ 📜serviceworker.js

## Getting Started

**pwa-boilerplate-react** is a template repository. Follow the instructions here to [create a new repository from this template](https://www.google.com).

- Install the dependencies
	> `npm install` and Done !
- To run the dev server:
	> `npm run dev`
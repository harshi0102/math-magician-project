<a name="readme-top"></a>

<div align="center">

  <br/>
  <h3><b>Math Magician Project</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 About the Project ](#-about-the-project-)
  - [Built With](#built-with)
  - [Live Demo](#live-demo)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [Run Test](#run-test)
    - [Deployment](#deployment)
  - [Author](#author)
    - [Future Features](#future-features)
  - [🤝 Contributing](#-contributing)
  - [Show your support](#show-your-support)
  - [Acknowledgments](#acknowledgments)
  - [📝 License](#-license)

<!-- PROJECT DESCRIPTION -->

# 📖 About the Project <a name="about-project"></a>

"Math-magician" is about building Single Page application based on an external API. 

I have setup the environment and tools needed to develop a React application. In the following projects,I will  develop the actual application.


<!-- > Describe your project in 1 or 2 sentences. --->


Phase 1- setup branch

- [ ] The easiest way to create a React application is using Create React App (CRA) and following the instructions in this [guide](https://create-react-app.dev/docs/getting-started/).
- [ ] The application should run in the browser without errors.
  

Phase 2- setup2 branch
All the project requirements for the step 2 of the project - Components have been implemented:
I have created a directory called components from CRA(text,images,styles).Inside components, created a new Calculator.js file and then created a react component that matches the below design.

![screenshot](./snapshot.png)

Phase 3- Step3 branch
I have created a new directory called logic and inside it I wrote code in calculate.js and operate.js after installing big.js using npm.I implemented click event handlers using the math logic from calculate.js and operate.js in my react component just to make my calculator buttons to work according to the funcationality i.e the button should subtract a given value when clicked on subtract button. 

Phase4- Fetch API Branch
I have implemented and used external Api i.e API NINJAS and created a new component for displaying a quote .I fetched data inside of a new component that shows a loading and error state. I imported the new componenet into my main component which is next to the calculator component. 

## Built With

- Major languages: Javascript
- Frameworks: React.js
- Technologies used: Node.js, Babel, Jest, webpack
- Tested with: - ESLint (JavaScript linting), Stylelint (style linting)

## Live Demo

- No deployment yet

### Prerequisites

- Internet connection and browser
- A text editor(preferably Visual Studio Code)
- Browser

### Setup

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)


### Usage

- Clone the repository using `git clone https://github.com/harshi0102/math-magician-project.git`
- Change directory into the project folder: `cd math-magician-project`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded

## Run Test

Available Scripts

In the project directory, you can run:

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

 `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

- Not ready yet

## Author

👤 **Harshika Govind**

- GitHub: [@harshi0102](https://github.com/harshi0102)
- Twitter: [@harshika0102me](https://twitter.com/harshika0102me)
- LinkedIn: [harshikagovind](https://linkedin.com/in/harshikagovind)

### Future Features
 **[Making Complete Website ]**
 **[Implementation of Routers for dynamic navigation in the website]**



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/math-magician-project/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
I would like to thank Microverse

## 📝 License

This project is [MIT](https://github.com/harshi0102/math-magician-project/blob/development/LICENSE) licensed.
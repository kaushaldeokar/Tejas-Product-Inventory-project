# Tejas Inventory Managemnt
--------------------------------------
The Tejas Product Inventory Management System is designed to streamline and optimize the management of Tejas Networks' extensive inventory of network products. This system leverages modern technologies to address the complexities of inventory management, providing a robust, scalable, and efficient solution. The backend is developed using both Java Spring Boot and Node.js individually, allowing for comparative advantages in security, performance, and scalability. The frontend is built using React.js, ensuring a responsive and interactive user experience, while MySQL is employed for reliable and efficient database management. By integrating these technologies, the system offers real-time inventory tracking, reporting capabilities. This approach enhances operational efficiency, reduces costs, and improves decision-making processes, ultimately supporting Tejas Networks' goal of maintaining optimal inventory levels and superior customer service.​

--------------------------------------

# Backend SpringBoot


## Initializer

Minimal [Spring Boot](http://projects.spring.io/) sample app.

## Requirements

For building and running the application you need:

- [JDK 22]
- [Maven Build Tool]
- [MySql Server]

## Create Database in Local System 

   $ create database tejas_app;

## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `src/main/java/BackendApplication.java` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

-----------------------------------------------------------
# Backend Nodejs
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3
  

If you need to update `npm`, you can make it using `npm`!  After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install

## Create Database in Local System 

    $ create database tejas_app;
    

## Running the project

    $ npm start

---
# Front-end ReactJs
# Simple React JS Project

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Basic Routing in React

The project Template can be used to build bigger projects

## Live Application URL

### https://aditya-sridhar.github.io/simple-reactjs-app
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```

The Application Runs on **localhost**

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS



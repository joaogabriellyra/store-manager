# Store Manager
This is a RESTful API built using Node.js and Express.js for the management of a store. It provides functionalities to add, create, view, and update products within the store. The project follows the MSC (Model-Service-Controller) architecture to maintain a clean and organized codebase.

**Summary**

- [Tools and Libraries](#tools-and-libraries)
- [Installation](#installation)
- [Routes](#routes)
## Tools and Libraries
* Node.js
* Express.js
* Express Async Errors
* JOI
* Mocha / Chai / Sinon
* Docker
* MySQL
* Dotenv
* ESLint
* Nodemon
* Snakeize / Camelize
## Installation
* First, you have to clone this repository. If you have any doubt: https://docs.github.com/articles/cloning-a-repository
* To configure the environment and start the application we will use Docker:
```
docker-compose up -d
```
![starting the application](https://i.ibb.co/xXk4psG/Captura-de-tela-de-2023-09-25-02-11-52.png)
* After that, you have to check the Node container ID to acess him:
```
docker ps
```
![acessing node container](https://i.ibb.co/jzcsTTg/Captura-de-tela-de-2023-09-25-02-01-07.png)
* Now, using the Node container ID, you will acess the container in interative mode and will type npm start:
![starting the application](https://i.ibb.co/YtyCQVz/Captura-de-tela-de-2023-09-25-02-15-10.png)
## Routes

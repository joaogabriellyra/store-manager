# Store Manager
This is a RESTful API built using Node.js and Express.js for the management of a store. It provides functionalities to add, create, view, and update products within the store. The project follows the MSC (Model-Service-Controller) architecture to maintain a clean and organized codebase.

**Summary**

- [Tools and Libraries](#tools-and-libraries)
- [Getting Started](#getting-started)
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
## Getting Started
The .env file has been commited to facilitate.

* Clone this repository:
```
git clone https://github.com/joaogabriellyra/store-manager.git
```
* To configure the environment and start the application we will use Docker:
```
docker-compose up -d
```
![starting the application](https://i.ibb.co/smyTbgZ/Captura-de-tela-de-2023-09-25-02-19-43.png)
* After that, you have to check the Node container ID to acess the container using the ID:
```
docker ps
```
![acessing node container](https://i.ibb.co/jzcsTTg/Captura-de-tela-de-2023-09-25-02-01-07.png)
* Now, using the Node container ID, you will acess the container in interative mode and will type npm start:

![starting the application](https://i.ibb.co/YtyCQVz/Captura-de-tela-de-2023-09-25-02-15-10.png)
 
## Routes
<details>
<summary><b>/products</b></summary>
<br />

- GET: Retrieve a list of all products.:
```
[
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do CapitÃ£o AmÃ©rica"
  }
]
```

- POST: Create a new product.
```
{
  "name": "Quad Blasters"
}
```
![Peter Quill](https://i.ibb.co/XYDwyGd/Captura-de-tela-de-2023-09-25-02-36-11.png)
</details>

<details>
<summary><b>/products/search?q=</b></summary>
<br />

- GET: Searches for products with matching name, passed as a query

```
URL EXAMPLE: /products/search?q=PartOfProductName
```
</details>

<details>
<summary><b>/products/:id</b></summary>
<br />

- GET: Retrieve a specific product by ID.

- PUT: Update an existing product by ID.
  - It expects a JSON object to be passed to the request, with a name (string with a minimum of 5 characters).
![New weapon](https://i.ibb.co/Xkm6DKw/Captura-de-tela-de-2023-09-25-02-59-49.png)
- DELETE: Delete a product by ID.
</details>

### Sales:

<details>
<summary><b>/sales</b></summary>
<br />

- GET: Retrieve a list of all sales
```
[
  {
    "saleId": 1,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-09-25T04:13:16.000Z",
    "productId": 3,
    "quantity": 15
  }
]
```
- POST: Create a new sale
  - It requires an array of objects to be passed to the request, with the following format:

```
 [
   {
     "productId": 1,
     "quantity": 1
   },
   {
     "productId": 2,
     "quantity": 5
   }
 ]
```
</details>

<details>
<summary><b>/sales/:id</b></summary>
<br />

- GET: Retrieve a specific sale by ID

- PUT: Update an existing sale by ID
  - It requires an array of objects to be passed to the request, with the following format:

```
 [
   {
     "productId": 1,
     "quantity": 1
   },
   {
     "productId": 2,
     "quantity": 5
   }
 ]
```
- DELETE: Remove a sale by ID
</details>

# Food Explorer API
API on Node for a food ordering system.

Two types of user can be registered: admin (identified by the admin boolean) and customer.

A customer can create an order and add meals to it.
An admin can control the status of all the orders and create/update meals.
(This control must me implemented on frontend routes.)

## Instructions
### Install dependencies
```
npm install
```

### Add environment variables to .env file

### Create database and tables
```
npm run migrate
```

### Populate database using seeds
```
npm run seed
```

## Deploy
Server available at https://api-food-explorer.onrender.com/.

Web application available at https://fooodexplorer.netlify.app/.

Frontend project: https://github.com/stelardn/front-food-explorer.

## Routes
### Users
#### Create
`@POST - .../users`
```json
{
	"name": "John",
	"email": "john2@mail.com",
	"password": "123"
}
```
#### Show
`@GET - .../users/:id`  
*A user must have a valid session to be able to access user information.*

### Sessions
`@POST - /sessions`
```json
{
	"email": "john2@mail.com",
	"password": "123"
}
```
Once a session is created, the user has authorization to access to the following routes.

### Meals
#### Create
`@POST - /meals`
```json
{
	"name": "Green Salad",
	"ingredients": ["lettuce", "tomato", "spinach"],
	"price": 17,
	"description": "Green salad with spinach."	
}
```

#### Update (name, ingredients, price, status, description)
`@PUT - /meals/:id`
```json
{
	"price": 20
}
```

#### Show a single meal
`@GET - /meals/:id`

#### Delete a meal
`@DELETE - /meals/:id`

#### Show a list of all meals
`@GET - /meals`

#### Update picture
*Attach the image file as Multipart with "picture" as fieldname.*  
`@PATCH - /meals/:id`

### Pictures
#### See a picture
`@GET - /files/:picture_name`  
*Picture name is returned in response whenever a meal its picture updated.*  

### Ingredients
#### Show a list of all ingredients registered in meals
`@GET - /ingredients`


### Favorites
*A customer can add meals to their favorites list.*  
#### Add a meal to the list
`@POST - /favorites`
```json
{
	"meal_id": 1
}
```

#### Remove a meal from the list
`@DELETE - /favorites/:favorite_id`

#### Show a list of all the favorites
`@GET - /favorites`


### Orders
#### Create an empty order
`@POST - /orders`

#### Add meals to an order
`@PUT - /orders/:order_id`
```
{
	"meal_id": 1,
	"quantity": 2
}
```

#### Update status 
`@PATCH - /orders/:order_id`
```
{
	"status": "Canceled"
}
```

#### Show a single order
`@GET - /orders/:order_id`

#### Show a list of all orders
`@GET - /orders/`

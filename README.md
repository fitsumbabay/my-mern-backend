# my-mern-backend

## Usage Instructions
1. Clone the repository:
   git clone https://github.com/fitsumbabay/my-mern-backend.git

## Live Site
Check out the live version of the application at: https://my-mern-backend-wiel.onrender.com

API Documentation
Overview
This is a simple API for managing items and fetching weather information. The API supports operations for creating, reading items, and retrieving weather data for specific cities.

Base URL
http://localhost:5000/api


Endpoints
1. Item Routes
GET /items
Description: Retrieve a list of all items.
Expected Response:
Status Code: 200 OK
Body:
[
    {
        "id": "string",
        "name": "string",
        "description": "string",
        "price": "number"
    }
    
]
-------------------------------------------------------------
POST /items
Description: Create a new item.
Request Body:
{
    "name": "string",        
    "description": "string", 
    "price": "number"        
}


Expected Response:
Status Code: 201 Created
Body:
{
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number"
}

-------------------------------------------------------------
2. Weather Routes
GET /weather/:city
Description: Retrieve weather data for a specific city.

Parameters: 
city (Path Parameter): The name of the city to fetch weather data for.

Expected Response:
Status Code: 200 OK
Body:
{
    "weather": [
        {
            "description": "string",
            "icon": "string",
        }
    ],
    "main": {
        "temp": "number",
        "pressure": "number",
        "humidity": "number",
    }
}

Error Response:
Status Code: 404 Not Found (if the city is not found)
Body:
{
    "message": "City not found"
}

Error Handling
Common errors and their responses include:
500 Internal Server Error:
{
    "message": "Internal server error"
}


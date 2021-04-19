
# Anime4Us API



**For Running the API on your localhost**

    node server.js
*For testing the API you can use Postman*

**API Endpoints**

    https://127.0.0.1:8000/api/v1/list/?search=
    
    https://127.0.0.1:8000/api/v1/list/popular
    
    https://127.0.0.1:8000/api/v1/list/top-ranked
    
    https://127.0.0.1:8000/api/v1/list/top-rated

You can use Query parameters like

 - page 
 -  limit 
 - sort

**Search Endpoint**

		https://127.0.0.1:8000/api/v1/list/?search=
In this Endpoint,partial search is present and you can search both english and japanese names 
 

**Dataset of *15,161* Animes is Hosted on MongoDb**

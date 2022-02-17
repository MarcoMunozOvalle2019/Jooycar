# Jooycar

steps:
1) docker-compose build  (to create images api and mongo)
2) docker-compose up (to run)
3) using Postman create collection (GET: localhost:5000/llenaDataBase, to poblate mongo with data)
4) using Postman create collection (GET: localhost:5000/api/trips/v1?start_gte=1642531428000&start_lte=1742541428000&distance_gte=1&limit=3&offset=1) list with filters
5) using Postman create collection (POST: localhost:5000/api/trips/v1), in body write folloe json trip:
 {
    "id" : "5efc0d7da7076973f1515121",
    "start" : {
        "time" : 5,
        "lat" : -33.580151,
        "lon" : -70.567221,
        "address" : "Avenida Apoquindo 291"
    },
    "end" : {
        "time" : 4,
        "lat" : -33.580461,
        "lon" : -70.567171,
        "address" : "Avenida Grecia 1041"
    },
    "distance" : 10.9,
    "duration" : 1500009,
    "overspeedsCount" : 9,
    "boundingBox" : [ 
        {
            "lat" : -33.580469,
            "lon" : -70.567179
        }, 
        {
            "lat" : -33.580439,
            "lon" : -70.567149
        }, 
        {
            "lat" : -33.580439,
            "lon" : -70.567149
        }, 
        {
            "lat" : -33.580439,
            "lon" : -70.567149
        }
    ]
}
6) thanks.

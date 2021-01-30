

export const report = [
    {
            "id": 0,
            "userId": 101,
            "delivered": 43,
            "pending": 72,
            "earning": 2250,
            "topCities":[
                {"city":"Casablanca", "num":49},
                {"city":"Rabat", "num":82},
                {"city":"Agadir", "num":63},
                {"city":"Marrakech", "num":43},
                {"city":"El Jadida", "num":24},
                {"city":"Tamara", "num":29},
                {"city":"Tetouan", "num":36},
                {"city":"Argion", "num":59},
                {"city":"Nokchaout", "num":71}
            ],
            "topSelling": [
                {  
                    "img":"/../assets/bird.jpeg",
                    "item":"Henna Wear",
                    "itemno":1872,
                    "delivered": 10,
                    "pending": 32,
                    "earning": 1050
                },
                {  
                    "img":"/../assets/bird.jpeg",
                    "item":"Henna Indigo",
                    "itemno":1902,
                    "delivered": 29,
                    "pending": 37,
                    "earning": 2900
                },
                {  
                    "img":"/../assets/bird.jpeg",
                    "item":"Henna White",
                    "itemno":1848,
                    "delivered": 29,
                    "pending": 22,
                    "earning": 1750
                },
                {  
                    "img":"/../assets/bird.jpeg",
                    "item":"Henna Red",
                    "itemno":1772,
                    "delivered": 7,
                    "pending": 19,
                    "earning": 350
                },
                {  
                    "img":"/../assets/bird.jpeg",
                    "item":"Henna Blue",
                    "itemno":1038,
                    "delivered": 91,
                    "pending": 12,
                    "earning": 4200
                }
            ]
        }   
    ]

export const users =[
    {
        "id":0,
        "name": "Moh Ola",
        "username":"ola",
        "email": "mohola@gmail.com",
        "phone": 863554386,
        "balance": "3050",
        "password": "ola",
        "accountType": "client"
    },
    {
        "id":1,
        "name": "Hamza cybo",
        "username":"hamz",
        "email": "hamza@cybo.com",
        "phone": 9930876333,
        "balance": "2960",
        "password": "hamz",
        "accountType": "admin"
    }
]

export const orders = [
    {
        "id": 0,
        "userid": 0,
        "ordercode": 986654,
        "products":[
            {"product": "Henna Indigo","code":"HNID","price":38, "quantity":2},
            {"product": "Henna White","code":"HNWH","price":25, "quantity":1},
        ],
        "status": "draft",
        "receiver": "Hamza Ezzaydia",
        "comment": "",
        "address": "hashi road, alokra street",
        "city": "Casablanca",
        "delivery_date": "17/03/2021",
        "date_created": "21-01-2021",
        "total": 265,
    },
    {
        "id": 1,
        "userid": 0,
        "ordercode": 736633,
        "products":[
            {"product": "Henna Indigo","code":"HNID","price":26, "quantity":2},
            {"product": "Henna White","code":"HNWH","price":53, "quantity":1},
            {"product": "Henna Purple","code":"HNPR","price":40, "quantity":2},
        ],
        "status": "in-progress",
        "receiver": "Ahmad hadji",
        "comment": "could not reach receiver",
        "address": "kolo war, haddg street",
        "city": "Rabat",
        "delivery_date": "14/01/2021",
        "date_created": "21-01-2021",
        "total": 327,
    },
    {
        "id": 2,
        "userid":0,
        "ordercode": 673655,
        "products":[
            {"product": "Henna Indigo","code":"HNID","price":30, "quantity":2}
        ],
        "status": "cancelled",
        "receiver": "Zakaria Aloma",
        "comment": "Receiver not in town",
        "address": "kirsh road, kayyam street",
        "city": "El jadida",
        "delivery_date": "12/03/2021",
        "date_created": "21-01-2021",
        "total": 162,
    },
    {
        "id": 3,
        "userid":0,
        "ordercode": 274665,
        "products":[
            {"product": "Henna Blue","code":"HNBL","price":35, "quantity":2},
            {"product": "Henna White","code":"HNWH","price":26, "quantity":1},
        ],
        "status": "fulfilled",
        "receiver": "Mohammed Akram",
        "comment": "Product delivered",
        "address": "kashi road, zinka street",
        "city": "Casablanca",
        "delivery_date": "17/02/2021",
        "date_created": "21-01-2021",
        "total": 293,
    },
    {
        "id": 4,
        "userid":0,
        "ordercode": 985521,
        "products":[
            {"product": "Henna Blue","code":"HNBL","price":45, "quantity":2},
        ],
        "status": "pending",
        "receiver": "Mahbush Kalam",
        "comment": "Awaiting approval",
        "address": "dukna road, lakwe street",
        "city": "Marakesh",
        "delivery_date": "08/02/2021",
        "date_created": "16-02-2021",
        "total": 148,
    }
]

export const products = [
    {"product": "Henna Indigo","code":"HNID", "price":45, quantity:1},
    {"product": "Henna White","code":"HNWH", "price":26,quantity:1},
    {"product": "Henna Purple","code":"HNPR","price": 32,quantity:1 },
    {"product": "Henna Red","code":"HNRD","price":40,quantity:1},
    {"product": "Henna Green","code":"HNGN","price":22,quantity:1 },
]
API


**Login**

Request POST /api/v1/login
x-www-form-urlencoded
email, password

Response
```json
{
    "success": true,
    "data": {
        "token": "8|JDMhJVJdFqOljlViwylboLozIUeesSWvi5z4v1XI",
        "name": "DSerov",
        "is_admin": false
    },
    "message": "User logged-in!"
}
```


**Register**

Request POST /api/v1/register

x-www-form-urlencoded
name, email, password, confirm_password

Response
```json
{
    "success": true,
    "data": {
        "token": "9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI",
        "name": "name_qwe"
    },
    "message": "User successfully registered!"
}
```


**Logout**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/v1/logout```

Response
```json
{
    "success": true,
    "data": {
        "id": 56,
        "name": "name_qwe",
        "email": "qwe@qwe.ru2",
        "phone": null,
        "about": null,
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-09T16:16:17.000000Z",
        "updated_at": "2021-07-09T16:16:17.000000Z"
    },
    "message": "User successfully logout!"
}
```

Если ошибки, ответ будет примерно такой:
```json
{
    "success": false,
    "message": "Unauthenticated."
}
```


**_Категории:_**

**Весь список**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/v1/categories```

Response
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Sint dolores error quidem expedita."
        },
        {
            "id": 2,
            "name": "Labore repudiandae sed consequatur vitae officiis."
        }
    ],
    "message": ""
}
```


**Одна категория**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/v1/categories/{id}```

Response
```json
{
    "success": true,
    "data": {
            "id": 2,
            "name": "Labore repudiandae sed consequatur vitae officiis."
        },
    "message": ""
}
```


**Новая категория**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/v1/categories/```
Fields: ```name```

Response
```json
{
    "success": true,
    "data": {
        "name": "Новая категория",
        "id": 13
    },
    "message": 201
}
```


**Обновление полей**
Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request PUT|PATCH ```/api/v1/categories/{id}```
Fields: ```name```

Response
```json
{
    "success": true,
    "data": {
        "name": "Новая категория 2",
        "id": 13
    },
    "message": "Updated"
}
```


**Удаление категории**
Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request DELETE ```/api/v1/categories/{id}```

Response
```json
{
    "success": true,
    "data": {
        "name": "Новая категория 2",
        "id": 13
    },
    "message": "Deleted"
}
```




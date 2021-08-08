API


**Login**

Request POST /api/auth/login
x-www-form-urlencoded
email, password

Response
```json
{
    "data": {
        "token": "8|JDMhJVJdFqOljlViwylboLozIUeesSWvi5z4v1XI"
    }
}
```


**Register**

Request POST /api/auth/register

x-www-form-urlencoded
name, email, password, confirm_password

Response
```json
{
    "data": {
        "token": "9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI",
        "name": "name_qwe"
    }
}
```


**Logout**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/auth/logout```

Response
```json
{
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
    }
}
```

**Current User**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/auth/me```

Response
```json
{
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
    }
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

Request GET ```/api/categories```

Response
```json
{
    "data": [
        {
            "id": 1,
            "name": "Sint dolores error quidem expedita."
        },
        {
            "id": 2,
            "name": "Labore repudiandae sed consequatur vitae officiis."
        }
    ]
}
```


**Одна категория**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/categories/{id}```

Response
```json
{
    "data": {
            "id": 2,
            "name": "Labore repudiandae sed consequatur vitae officiis."
        }
}
```


**Новая категория**

Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/categories/```
Fields: ```name```

Response
```json
{
    "data": {
        "name": "Новая категория",
        "id": 13
    }
}
```


**Обновление полей**
Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request PUT|PATCH ```/api/categories/{id}```
Fields: ```name```

Response
```json
{
    "data": {
        "name": "Новая категория 2",
        "id": 13
    }
}
```


**Удаление категории**
Header: 
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request DELETE ```/api/categories/{id}```

Response
```json
{
}
```



**_Рецепты:_**

**Весь список**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/dishes```

Response
```json
{
    "data": [
        {
            "id": 1,
            "title": "Sint dolores error quidem expedita.",
            "img": "/assets/img/1.jpg",
            "description": "Lorem ipsum dolor sit",
            "pubdate": "2021-07-10 23:12:59",
            "user_id": 2,
            "category_id": 1,
            "views": 234
        },
        {
          "id": 2,
          "title": "Lorem ipsum dolor sit.",
          "img": "/assets/img/2.jpg",
          "description": "Lorem ipsum dolor sit",
          "pubdate": "2021-07-10 22:12:59",
          "user_id": 3,
          "category_id": 5,
          "views": 213 
        }
    ]
}
```


**Один рецепт**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/dishes/{id}```

Response
```json
{
    "data": {
        "id": 2,
        "title": "Lorem ipsum dolor sit.",
        "img": "/assets/img/2.jpg",
        "description": "Lorem ipsum dolor sit",
        "pubdate": "2021-07-10 22:12:59",
        "user_id": 3,
        "category_id": 5,
        "views": 213
    }
}
```


**Новый рецепт**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/dishes/```
Fields: ```title, img, description, user_id, category_id```

Response
```json
{
    "data": {
        "id": 2,
        "title": "Lorem ipsum dolor sit.",
        "img": "/assets/img/2.jpg",
        "description": "Lorem ipsum dolor sit",
        "pubdate": "2021-07-10 22:12:59",
        "user_id": 3,
        "category_id": 5,
        "views": 213
    }
}
```


**Обновление полей**
Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request PUT|PATCH ```/api/dishes/{id}```
Fields: ```title```

Response
```json
{
    "data": {
        "id": 2,
        "title": "Куриное рагу.",
        "img": "/assets/img/2.jpg",
        "description": "Lorem ipsum dolor sit",
        "pubdate": "2021-07-10 22:12:59",
        "user_id": 3,
        "category_id": 5,
        "views": 213
    }
}
```


**Удаление рецепта**
Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request DELETE ```/api/dishes/{id}```

Response
```json
{
    "data": {
        "id": 2,
        "title": "Lorem ipsum dolor sit.",
        "img": "/assets/img/2.jpg",
        "description": "Lorem ipsum dolor sit",
        "pubdate": "2021-07-10 22:12:59",
        "user_id": 3,
        "category_id": 5,
        "views": 213
    }
}
```



**_Ингредиенты:_**

**Весь список**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/dishes/{id}/ingredients```

Response
```json
{
  "data": [
  {
    "3": {
      "id": 4,
      "ingredients_name": "упитанная курочка",
      "quantity": 5,
      "measure": "тушка",
      "dish_id": 98
    }},
    {
    "9": {
      "id": 10,
      "ingredients_name": "соль",
      "quantity": 9,
      "measure": "чайная ложка",
      "dish_id": 98
    }
    }
  ]
} 
```


**Один ингредиент**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/dishes/{id}/ingredients/{id}

Response
```json
{
  "data": {
    "id": 4,
    "ingredients_name": "упитанная курочка",
    "quantity": 5,
    "measure": "тушка",
    "dish_id": 98
  }
}
```


**Новый ингредиент**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/dishes/{id}/ingredients```
Fields: ```ingredients_name, quantity, measure```

Response
```json
{
  "data": {
    "ingredients_name": "Тестовый ингредиент",
    "quantity": "34",
    "measure": "Тестовая мера измерения",
    "dish_id": 98,
    "id": 51
  }
} 
```


**Обновление полей**
Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request PUT|PATCH ```/api/dishes/{id}/ingredients/{id}```
Fields: ```ingredients_name```

Response
```json
{
    "data": {
        "id": 4,
        "ingredients_name": "Тестовый ингредиент (изменен)",
        "quantity": "34",
        "measure": "Тестовая мера измерения",
        "dish_id": 98
    }
}
```


**Удаление ингредиента**
Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request DELETE ```/api/dishes/{id}/ingredients/{id}```

Response
```json
{
    "data": {
        "id": 4,
        "ingredients_name": "Тестовый ингредиент (изменен)",
        "quantity": "34",
        "measure": "Тестовая мера измерения",
        "dish_id": 98
    }
}
```


**_Полный рецепт:_**

**Все рецепты**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/full-dishes```

Response
```json
{
  "data": {
    "1": {
      "dish": {
        "id": 1,
        "title": "Occaecati laborum tenetur asperiores error sit necessitatibus et consequatur aut.",
        "big_img": "https://via.placeholder.com/360x360.png/00cc22?text=dishes+maiores",
        "small_img": "https://via.placeholder.com/360x360.png/00eebb?text=dishes+sint",
        "description": "Nihil ut accusantium quasi et labore expedita. Ut expedita cumque unde quas.",
        "user_id": 24,
        "category_id": 9,
        "views": 435,
        "rating": 4.019999999999999573674358543939888477325439453125,
        "complexity": 3,
        "created_at": "2015-07-28T20:35:18.000000Z"
      },
      "ingredients": [
        {
          "id": 1,
          "ingredients_name": "сахар",
          "quantity": 8,
          "measure_id": 1,
          "measure": "г.",
          "dish_id": 1
        },
        {
          "id": 2,
          "ingredients_name": "упитанная курочка",
          "quantity": 2,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        },
        {
          "id": 3,
          "ingredients_name": "лавровый лист",
          "quantity": 7,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        }
      ],
      "dishSteps": [
        {
          "id": 1,
          "step_number": 1,
          "img": "https://via.placeholder.com/360x360.png/00dd44?text=dishes+eius",
          "text": "Temporibus ut vel officiis rerum ut.",
          "dish_id": 1
        },
        {
          "id": 2,
          "step_number": 2,
          "img": "https://via.placeholder.com/360x360.png/005599?text=dishes+culpa",
          "text": "Corporis beatae ut saepe sint sequi. Rerum totam quo dicta omnis.",
          "dish_id": 1
        },
        {
          "id": 3,
          "step_number": 3,
          "img": "https://via.placeholder.com/360x360.png/002244?text=dishes+adipisci",
          "text": "Et doloremque dolorum numquam. Tenetur et aspernatur ut.",
          "dish_id": 1
        },
        {
          "id": 4,
          "step_number": 4,
          "img": "https://via.placeholder.com/360x360.png/0044cc?text=dishes+assumenda",
          "text": "Velit blanditiis totam rerum laborum ut dolorum.",
          "dish_id": 1
        }
      ],
      "user": {
        "id": 24,
        "name": "Dewayne Gerhold",
        "email": "cicero78@example.com",
        "phone": "+15626036003",
        "about": "Nihil sunt quis consequuntur quia ipsam optio qui aut porro quo.",
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-20T08:06:05.000000Z",
        "updated_at": "2021-07-20T08:06:05.000000Z"
      },
      "category": {
        "id": 9,
        "name": "Iure velit soluta error."
      }
    },
    "2": { 
     }
  }
} 
```


**Все рецепты категории**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/categories/{id}/full-dishes```

Response
```json
{
  "data": {
    "1": {
      "dish": {
        "id": 1,
        "title": "Occaecati laborum tenetur asperiores error sit necessitatibus et consequatur aut.",
        "big_img": "https://via.placeholder.com/360x360.png/00cc22?text=dishes+maiores",
        "small_img": "https://via.placeholder.com/360x360.png/00eebb?text=dishes+sint",
        "description": "Nihil ut accusantium quasi et labore expedita. Ut expedita cumque unde quas.",
        "user_id": 24,
        "category_id": 9,
        "views": 435,
        "rating": 4.019999999999999573674358543939888477325439453125,
        "complexity": 3,
        "created_at": "2015-07-28T20:35:18.000000Z"
      },
      "ingredients": [
        {
          "id": 1,
          "ingredients_name": "сахар",
          "quantity": 8,
          "measure_id": 1,
          "measure": "г.",
          "dish_id": 1
        },
        {
          "id": 2,
          "ingredients_name": "упитанная курочка",
          "quantity": 2,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        },
        {
          "id": 3,
          "ingredients_name": "лавровый лист",
          "quantity": 7,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        }
      ],
      "dishSteps": [
        {
          "id": 1,
          "step_number": 1,
          "img": "https://via.placeholder.com/360x360.png/00dd44?text=dishes+eius",
          "text": "Temporibus ut vel officiis rerum ut.",
          "dish_id": 1
        },
        {
          "id": 2,
          "step_number": 2,
          "img": "https://via.placeholder.com/360x360.png/005599?text=dishes+culpa",
          "text": "Corporis beatae ut saepe sint sequi. Rerum totam quo dicta omnis.",
          "dish_id": 1
        },
        {
          "id": 3,
          "step_number": 3,
          "img": "https://via.placeholder.com/360x360.png/002244?text=dishes+adipisci",
          "text": "Et doloremque dolorum numquam. Tenetur et aspernatur ut.",
          "dish_id": 1
        },
        {
          "id": 4,
          "step_number": 4,
          "img": "https://via.placeholder.com/360x360.png/0044cc?text=dishes+assumenda",
          "text": "Velit blanditiis totam rerum laborum ut dolorum.",
          "dish_id": 1
        }
      ],
      "user": {
        "id": 24,
        "name": "Dewayne Gerhold",
        "email": "cicero78@example.com",
        "phone": "+15626036003",
        "about": "Nihil sunt quis consequuntur quia ipsam optio qui aut porro quo.",
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-20T08:06:05.000000Z",
        "updated_at": "2021-07-20T08:06:05.000000Z"
      },
      "category": {
        "id": 9,
        "name": "Iure velit soluta error."
      }
    },
    "2": { 
     }
  }
} 
```

**Один полный рецепт**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/full-dishes/{id}```

Response
```json
{
  "data": {
    "1": {
      "dish": {
        "id": 1,
        "title": "Occaecati laborum tenetur asperiores error sit necessitatibus et consequatur aut.",
        "big_img": "https://via.placeholder.com/360x360.png/00cc22?text=dishes+maiores",
        "small_img": "https://via.placeholder.com/360x360.png/00eebb?text=dishes+sint",
        "description": "Nihil ut accusantium quasi et labore expedita. Ut expedita cumque unde quas.",
        "user_id": 24,
        "category_id": 9,
        "views": 435,
        "rating": 4.019999999999999573674358543939888477325439453125,
        "complexity": 3,
        "created_at": "2015-07-28T20:35:18.000000Z"
      },
      "ingredients": [
        {
          "id": 1,
          "ingredients_name": "сахар",
          "quantity": 8,
          "measure_id": 1,
          "measure": "г.",
          "dish_id": 1
        },
        {
          "id": 2,
          "ingredients_name": "упитанная курочка",
          "quantity": 2,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        },
        {
          "id": 3,
          "ingredients_name": "лавровый лист",
          "quantity": 7,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        }
      ],
      "dishSteps": [
        {
          "id": 1,
          "step_number": 1,
          "img": "https://via.placeholder.com/360x360.png/00dd44?text=dishes+eius",
          "text": "Temporibus ut vel officiis rerum ut.",
          "dish_id": 1
        },
        {
          "id": 2,
          "step_number": 2,
          "img": "https://via.placeholder.com/360x360.png/005599?text=dishes+culpa",
          "text": "Corporis beatae ut saepe sint sequi. Rerum totam quo dicta omnis.",
          "dish_id": 1
        },
        {
          "id": 3,
          "step_number": 3,
          "img": "https://via.placeholder.com/360x360.png/002244?text=dishes+adipisci",
          "text": "Et doloremque dolorum numquam. Tenetur et aspernatur ut.",
          "dish_id": 1
        },
        {
          "id": 4,
          "step_number": 4,
          "img": "https://via.placeholder.com/360x360.png/0044cc?text=dishes+assumenda",
          "text": "Velit blanditiis totam rerum laborum ut dolorum.",
          "dish_id": 1
        }
      ],
      "user": {
        "id": 24,
        "name": "Dewayne Gerhold",
        "email": "cicero78@example.com",
        "phone": "+15626036003",
        "about": "Nihil sunt quis consequuntur quia ipsam optio qui aut porro quo.",
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-20T08:06:05.000000Z",
        "updated_at": "2021-07-20T08:06:05.000000Z"
      },
      "category": {
        "id": 9,
        "name": "Iure velit soluta error."
      }
    }
  }
} 
```


**Новый полный рецепт**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request POST ```/api/full-dishes/```

Response
```json
{
  "data": {
    "1": {
      "dish": {
        "id": 1,
        "title": "Occaecati laborum tenetur asperiores error sit necessitatibus et consequatur aut.",
        "big_img": "https://via.placeholder.com/360x360.png/00cc22?text=dishes+maiores",
        "small_img": "https://via.placeholder.com/360x360.png/00eebb?text=dishes+sint",
        "description": "Nihil ut accusantium quasi et labore expedita. Ut expedita cumque unde quas.",
        "user_id": 24,
        "category_id": 9,
        "views": 435,
        "rating": 4.019999999999999573674358543939888477325439453125,
        "complexity": 3,
        "created_at": "2015-07-28T20:35:18.000000Z"
      },
      "ingredients": [
        {
          "id": 1,
          "ingredients_name": "сахар",
          "quantity": 8,
          "measure_id": 1,
          "measure": "г.",
          "dish_id": 1
        },
        {
          "id": 2,
          "ingredients_name": "упитанная курочка",
          "quantity": 2,
          "measure": "ст.л",
          "dish_id": 1
        },
        {
          "id": 3,
          "ingredients_name": "лавровый лист",
          "quantity": 7,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        }
      ],
      "dishSteps": [
        {
          "id": 1,
          "step_number": 1,
          "img": "https://via.placeholder.com/360x360.png/00dd44?text=dishes+eius",
          "text": "Temporibus ut vel officiis rerum ut.",
          "dish_id": 1
        },
        {
          "id": 2,
          "step_number": 2,
          "img": "https://via.placeholder.com/360x360.png/005599?text=dishes+culpa",
          "text": "Corporis beatae ut saepe sint sequi. Rerum totam quo dicta omnis.",
          "dish_id": 1
        },
        {
          "id": 3,
          "step_number": 3,
          "img": "https://via.placeholder.com/360x360.png/002244?text=dishes+adipisci",
          "text": "Et doloremque dolorum numquam. Tenetur et aspernatur ut.",
          "dish_id": 1
        },
        {
          "id": 4,
          "step_number": 4,
          "img": "https://via.placeholder.com/360x360.png/0044cc?text=dishes+assumenda",
          "text": "Velit blanditiis totam rerum laborum ut dolorum.",
          "dish_id": 1
        }
      ],
      "user": {
        "id": 24,
        "name": "Dewayne Gerhold",
        "email": "cicero78@example.com",
        "phone": "+15626036003",
        "about": "Nihil sunt quis consequuntur quia ipsam optio qui aut porro quo.",
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-20T08:06:05.000000Z",
        "updated_at": "2021-07-20T08:06:05.000000Z"
      },
      "category": {
        "id": 9,
        "name": "Iure velit soluta error."
      }
    }
  }
}
```


**Обновление полей полного рецепта**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request PUT|PATCH ```/api/full-dishes/{id}```

Fields: ```dish.title```

Response
```json
{
  "data": {
    "1": {
      "dish": {
        "id": 1,
        "title": "Tru-la-la.",
        "big_img": "https://via.placeholder.com/360x360.png/00cc22?text=dishes+maiores",
        "small_img": "https://via.placeholder.com/360x360.png/00eebb?text=dishes+sint",
        "description": "Nihil ut accusantium quasi et labore expedita. Ut expedita cumque unde quas.",
        "user_id": 24,
        "category_id": 9,
        "views": 435,
        "rating": 4.019999999999999573674358543939888477325439453125,
        "complexity": 3,
        "created_at": "2015-07-28T20:35:18.000000Z"
      },
      "ingredients": [
        {
          "id": 1,
          "ingredients_name": "сахар",
          "quantity": 8,
          "measure_id": 1,
          "measure": "г.",
          "dish_id": 1
        },
        {
          "id": 2,
          "ingredients_name": "упитанная курочка",
          "quantity": 2,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        },
        {
          "id": 3,
          "ingredients_name": "лавровый лист",
          "quantity": 7,
          "measure_id": 1,
          "measure": "ст.л",
          "dish_id": 1
        }
      ],
      "dishSteps": [
        {
          "id": 1,
          "step_number": 1,
          "img": "https://via.placeholder.com/360x360.png/00dd44?text=dishes+eius",
          "text": "Temporibus ut vel officiis rerum ut.",
          "dish_id": 1
        },
        {
          "id": 2,
          "step_number": 2,
          "img": "https://via.placeholder.com/360x360.png/005599?text=dishes+culpa",
          "text": "Corporis beatae ut saepe sint sequi. Rerum totam quo dicta omnis.",
          "dish_id": 1
        },
        {
          "id": 3,
          "step_number": 3,
          "img": "https://via.placeholder.com/360x360.png/002244?text=dishes+adipisci",
          "text": "Et doloremque dolorum numquam. Tenetur et aspernatur ut.",
          "dish_id": 1
        },
        {
          "id": 4,
          "step_number": 4,
          "img": "https://via.placeholder.com/360x360.png/0044cc?text=dishes+assumenda",
          "text": "Velit blanditiis totam rerum laborum ut dolorum.",
          "dish_id": 1
        }
      ],
      "user": {
        "id": 24,
        "name": "Dewayne Gerhold",
        "email": "cicero78@example.com",
        "phone": "+15626036003",
        "about": "Nihil sunt quis consequuntur quia ipsam optio qui aut porro quo.",
        "is_admin": false,
        "email_verified_at": null,
        "created_at": "2021-07-20T08:06:05.000000Z",
        "updated_at": "2021-07-20T08:06:05.000000Z"
      },
      "category": {
        "id": 9,
        "name": "Iure velit soluta error."
      }
    }
  }
}
```


**Удаление полного рецепта**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request DELETE ```/api/full-dishes/{id}```

Response
```json
{
}
```
**_Меры:_**

**Весь список**

Header:
```Bearer token: 9|BpoBMzkDYk36ltIlEL4a5enaZ6mLdXtdQhcxlxTI```

Request GET ```/api/measures```

Response
```json
{
  "data": [
    {
      "id": 1,
      "name": "кг"
    },
    {
      "id": 2,
      "name": "г"
    },
    {
      "id": 3,
      "name": "л"
    },
    {
      "id": 4,
      "name": "мл"
    },
    {
      "id": 5,
      "name": "ч.л."
    },
    {
      "id": 6,
      "name": "ст.л."
    },
    {
      "id": 7,
      "name": "шт."
    }
  ]
}
```

export const MAX_TITLE_LENGTH = 50;
export const MAX_CAT_NAME_LENGTH = 35;

export const TEST_FULL_DISH = {
    "dish": {
        "id":250,
        "title":"Мясо по-французски с сыром и картофелем",
        "big_img":"https://via.placeholder.com/640x480.png/0066aa?text=dishes+temporibus",
        "small_img":"https://via.placeholder.com/130x100.png/00aa44?text=dishes+officia",
        "description":"Itaque reiciendis assumenda sed. Qui non libero dolore quaerat magnam. Possimus pariatur eligendi modi. Molestiae sit eius facere officia illum in consequatur. Recusandae fugiat sint doloribus odit perspiciatis. Et asperiores id inventore eligendi. Dolores eum tenetur quisquam. Aut possimus id nisi aspernatur voluptatem facilis. Recusandae id expedita laboriosam officiis quo ratione voluptatum.",
        "user_id":3,
        "category_id":4,
        "views":67,
        "rating":2.58,
        "complexity":1,
        "created_at":"2010-08-22T17:27:01.000000Z"
    },
    "ingredients": [
        {
            "id":1,
            "ingredients_name":"Мясо (свинина)",
            "quantity":0.6,
            "measure":"кг",
            "dish_id":250
        },
        {
            "id":2,
            "ingredients_name":"Картофель",
            "quantity":0.5,
            "measure":"кг",
            "dish_id":250
        },
        {
            "id":3,
            "ingredients_name":"Сыр",
            "quantity":250,
            "measure":"г",
            "dish_id":250
        },
        {
            "id":4,
            "ingredients_name":"Соль",
            "quantity":2,
            "measure":"ч.л.",
            "dish_id":250
        },
        {
            "id":5,
            "ingredients_name":"Лук репчатый",
            "quantity":2,
            "measure":"шт.",
            "dish_id":250
        }
    ],
    "dish_steps": [
        {
            "id":1,
            "step_number":1,
            "img":"https://via.placeholder.com/300x225.png/00ee66?text=dishes+animi",
            "text":"Voluptatibus earum voluptatum amet. Sed ut officiis praesentium tempora. Blanditiis velit et et voluptates reiciendis sint. Vel est sed architecto rem exercitationem dolorem. In ut natus autem dolore quis nemo corporis cum. Laboriosam consequatur adipisci praesentium et repudiandae. Neque culpa fuga distinctio ea harum officiis officiis. Animi est odio aut delectus ut nesciunt. Quia omnis temporibus porro autem. Consectetur rem nisi asperiores porro numquam saepe. Eum consequatur et necessitatibus ab quas doloremque odit.",
            "dish_id":250
        },
        {
            "id":2,
            "step_number":2,
            "img":"https://via.placeholder.com/300x225.png/0088aa?text=dishes+tempore",
            "text":"Voluptatibus modi expedita dignissimos ratione earum culpa dolor laboriosam. Dolor numquam incidunt autem ut. Natus et qui eos veniam. Qui accusamus consequatur mollitia qui sed et aut. Odit a quisquam rerum suscipit voluptatibus dolorem quis. Corporis ullam similique ea consequuntur omnis est ut. Ea et alias ex voluptas. Aliquam dolores adipisci cumque voluptate tempore sint. Dignissimos officiis eum ut veritatis. Atque rerum quia odio eos. Quidem reiciendis dolor tempora.",
            "dish_id":250
        },
        {
            "id":3,
            "step_number":3,
            "img":"https://via.placeholder.com/300x225.png/00aa22?text=dishes+nemo",
            "text":"Et enim omnis et numquam quo quia. Voluptatum temporibus maiores non corrupti. Harum vel odit quia dolore esse distinctio. Accusantium odio et voluptatem eius quam cumque. Sint accusamus molestiae earum. Quia asperiores quos est voluptate aspernatur odit. Consequatur molestiae aut aliquid expedita ut. Minus qui consectetur quos sunt ab ipsa asperiores. Quia quam ea repellendus et et beatae eum.",
            "dish_id":250
        }
    ],
    "author": {
        "id":3,
        "name":"Maybell Ernser",
        "email":"friesen.kristin@example.org",
        "phone":"848-697-8200",
        "about":"Beatae quis qui porro ut rerum consectetur aliquid sint porro unde.",
        "is_admin":false,
        "email_verified_at":null,
        "created_at":"2021-07-23T07:38:00.000000Z",
        "updated_at":"2021-07-23T07:38:00.000000Z"
    },
    "category": {
        "id":4,
        "name":"Мясные блюда"
    }
};

export const EMPTY_DISH = {
    "dish": {
        "title":"",
        "big_img":"https://via.placeholder.com/640x480.png/0066aa?text=dishes+temporibus",
        "small_img":"https://via.placeholder.com/130x100.png/00aa44?text=dishes+officia",
        "description":"",
        "user_id":3,
        "category_id":3,
        "complexity":1,
    },
    "ingredients": [],
    "dish_steps": [],
};

export const TEST_DISH_FOR_POST = {
    "dish": {
        "title":"Мясо по-французски с сыром и картофелем",
        "big_img":"https://via.placeholder.com/640x480.png/0066aa?text=dishes+temporibus",
        "small_img":"https://via.placeholder.com/130x100.png/00aa44?text=dishes+officia",
        "description":"Itaque reiciendis assumenda sed. Qui non libero dolore quaerat magnam. Possimus pariatur eligendi modi.",
        "user_id":3,
        "category_id":"",
        "complexity":1,
    },
    "ingredients": [
        {
            "ingredients_name":"Мясо (свинина)",
            "quantity":0.6,
            "measure_id":1,
        },
        {
            "ingredients_name":"Картофель",
            "quantity":0.5,
            "measure_id":1,
        },
        {
            "ingredients_name":"Сыр",
            "quantity":250,
            "measure_id":2,
        },
        {
            "ingredients_name":"Соль",
            "quantity":2,
            "measure_id":5,
        },
        {
            "ingredients_name":"Лук репчатый",
            "quantity":2,
            "measure_id":7,
        }
    ],
    "dish_steps": [],

};

export const TEST_DISH_FOR_POST_2 = {
    "title":"Мясо по-французски с сыром и картофелем",
    "big_img":"https://via.placeholder.com/640x480.png/0066aa?text=dishes+temporibus",
    "small_img":"https://via.placeholder.com/130x100.png/00aa44?text=dishes+officia",
    "description":"Текст описания блюда",
    "user_id":3,
    "category_id":1,
    "complexity":1,
    "ingredients": [
        {
            "ingredients_name":"Лук репчатый",
            "quantity":20,
            "measure":
                {
                    "id": 3
                }
        }
    ],
    "dish_steps": [
        {
            "step_number":1,
            "img":"https://via.placeholder.com/300x225.png/00ee66?text=dishes+animi",
            "text":"Текст шага №1",
        },
        {
            "step_number":2,
            "img":"https://via.placeholder.com/300x225.png/0088aa?text=dishes+tempore",
            "text":"Текст шага №2",
        },
        {
            "step_number":3,
            "img":"https://via.placeholder.com/300x225.png/00aa22?text=dishes+nemo",
            "text":"Текст шага №3",
        }
    ],

};

Создание таблицы категорий с фейковыми данными
php artisan migrate
php artisan db:seed --class=UsersTableSeeder


API
====
**Create item:**
Request POST /api/v1/categories/
fields = 'name'
xxx-from-encoded

**List all items**
Request GET /api/v1/categories
Response
[
  { id: 1, name: "Мясные блюда" },
  { id: 2, name: "Рыбные блюда" }
]

**Get item:**
Request GET /api/v1/categories/{id}
Response
{ "id": 10, "name": "Test" }

**Update item**
Request PATCH|PUT /api/v1/categories/{id}
Response
{ "id": 10, "name": "Test" }

**Delete item**
Request DELETE /api/v1/categories/{id}
Response
[]

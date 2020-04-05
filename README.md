# Boilerplate app for [KateJS](https://github.com/romannep/katejs)


# Database
По умолчанию используется база данных MySQL

Для работы с кирилицей необходимо при создании базы данных
для проекта установить ей кодировку utf8mb4 .

Для использования SQLite
````
npm install sqlite3
````
`env[.local].json`
````
{
  "database": { 
    "dialect": "sqlite",
    "storage": "./test.db"
  },
}
````

# Сборка
````
npm run build-client
npm run build-server
````
Запуск сборки
````
npm run ./lib/server-node.js
````
# Настройка сервера
[Настройка сверера](https://github.com/romannep/katejs-boilerplate/blob/master/ServerSetup.md)

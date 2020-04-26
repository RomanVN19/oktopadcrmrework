# Шаблон приложения для [KateJS](https://github.com/romannep/katejs)


## База данных
По умолчанию используется база данных MySQL

Для работы с кириллицей необходимо при создании базы данных
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

Перед началом работы необходимо синхронизировать структуру БД
````
npm run [dev-]dbsync
````

## Разработка
````
npm run dev-server
npm run dev-client
````

## Сборка
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

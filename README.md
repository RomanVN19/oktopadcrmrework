# Boilerplate app for [KateJS](https://github.com/romannep/katejs)


# Database
По умолчанию используется база данных MySQL

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
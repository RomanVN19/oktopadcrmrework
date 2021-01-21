# Шаблон приложения для [KateJS](https://github.com/romannep/katejs)


## База данных
Перед началом работы отредатируйте параметры соединения
с СУБД в файле `env[.local].json`

По умолчанию используется база данных MySQL

Для работы с кириллицей необходимо при создании базы данных
для проекта установить ей кодировку utf8mb4 .

Для использования SQLite
````
npm install sqlite3
````
`env[.local].json`
````
  "database": {
    "dialect": "sqlite",
    "storage": "./dev.db",
    "foreignKeys": false
  },
````


## Разработка
Перед запуском приложения необходимо синхронизировать структуру БД
````
npm run [dev-]dbsync
````
Запуск приложения
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
## Настройка сервера
[Настройка сверера](https://github.com/romannep/katejs-boilerplate/blob/master/ServerSetup.md)

## Публикация приложения как пакета
Разово нужна регистрация на [npmjs.org](https://www.npmjs.com/)
и авторизация
````
npm login
````
Перед публикацией проверьте имя пакета в `package.json` и
`src\structure.js`
````
export const packageName = 'katejs-your-package-name';
````
Для публикации выполните две команды
````
npm run build-package
npm publish
````

## Лицензия
[AGPL-3.0](https://github.com/romannep/katejs-boilerplate/blob/master/LICENSE)


# Настройка сервера

# Установка
````
Инструкция для Ubuntu 18.04
````
Требуется: nginx, node.js (>10), MySQL, GIT

#№ Установка ПО
````
apt-get install nginx nodejs npm mysql-server mc
````
## Создание пользователя, папки
Из под root
````
cd /home/
mkdir crm
useradd crm
chown crm:crm crm/
su crm
bash-4.2$ ls
bash-4.2$ mkdir prod
bash-4.2$ cd prod
bash-4.2$ git init
````
# Установка приложения
````
bash-4.2$ git remote add origin https://github.com/user/repo.git
git pull

npm install

chmod +x run.sh
````
run.sh
````
nohup node ./lib/server-node.js &
````

# Настройка СУБД MySQL
user: crm
password: some_pass
````
mysql
mysql> CREATE USER 'crm'@'localhost' IDENTIFIED BY 'some_pass';
Query OK, 0 rows affected (0.00 sec)

mysql> create database crm;
Query OK, 1 row affected (0.00 sec)

mysql> ALTER DATABASE crm CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci; 
Query OK, 1 row affected (0.00 sec)

mysql> GRANT ALL PRIVILEGES ON crm . * TO 'crm'@'localhost';
Query OK, 0 rows affected (0.01 sec)

mysql> SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
````
Чтобы убрать глобально надо менять конфиг
````
mysql> SELECT @@sql_mode

echo "sql-mode ..." >> /etc/mysql/mysql.conf.d/mysqld.cnf
````

## Настройка вэб сервера
````
root@someserv:~# mcedit /etc/nginx/sites-enabled/default
(внести конфиг - ниже)
root@someserv:~# nginx -t
root@someserv:~# /etc/init.d/nginx restart
````
Конфиг
````
server {
        listen 80;

        server_name crm.youdomain.ru;

        root /home/crm/prod;

        location / {
                proxy_pass http://127.0.0.1:2002;
                proxy_set_header Host $host;
        }

}
````
## Запуск
````
git pull
npm run dbsync
npm run build-server
npm run build-client
./run.sh
````

## Перезапуска
````
root@someserv:~# su - crm
$ cd ~/prod
$ pkill server-node
# опционально - обновление
git pull
npm run dbsync
npm run build-client
npm run build-server
# / опционально - обновление
$ ./run.sh
````

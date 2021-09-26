# All Commands

```sh
sudo apt update && sudo apt upgrade -y
```

```sh
sudo apt install postgresql postgresql-contrib -y
```

sudo cat /etc/passwd

sudo -i -u postgres

```sh
psql
\l
\c
\dt
\q
```

createuser --interactive
ubuntu

exit

psql -d postgres

Under postgres=# 

ALTER USER ubuntu PASSWORD 'password';


in local

pg_dump -U postgres -f yelp.pgsql -C boilerplate1


copy local from prod server

scp -i [path to pem file] [path to yelp.pgsql] username@[server-ip]:[directory to copy file to]


scp -i sheepishCheetah0VCIDY4N9.pem boilerplate1.pgsql ubuntu@3.108.53.165:/home/ubuntu


ubuntu@ip-172-31-20-1:~$ psql -d postgres
postgres=# CREATE DATABASE boilerplate1;



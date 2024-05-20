# Installation

1. clone repository
2. switch to branch `new-master`
3. run command `npm i`
4. create `.env` file based on `.env.example` (you can copy and paste it)
5. configure your database connection in `.env` file
6. run command `npx sequelize-cli db:migrate` in project root folder
7. run command `npx sequelize-cli db:seed:all` in project root folder
8. run command `npm run start` in project root folder

# API Documentation

[http](https://api.fsw42selfservice.online/api-docs/#/)

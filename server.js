const express = require('express')
const port = 7856;
const sequelize = require('./database/sequelize');

const app = express();
app.use(express.json())

const server =async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

server()

app.listen(port,()=> {
    console.log(`server is running on port: ${port}`);
    
})
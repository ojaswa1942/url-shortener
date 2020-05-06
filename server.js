const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');
const { handleRegister } = require('./controllers/register');
const { handleFetchRequest } = require('./controllers/fetch');
require('dotenv').config();

const db = new Client();
// Takes default config from ENV
db.connect(error => {
    if(error)
        console.error(`Error connecting to database`);
});

db.on('notice', msg => console.warn('notice:', msg))

// const db = knex({
//   client: 'pg',
//   connection: {
//   	connectionString: process.env.DATABASE_URL,
//   	ssl: true
//    //  host : 'localhost',
//    //  user : 'ojaswa',
//    //  password : 'ojaswa',
//    //  database : 'ojaswa'
//   }
// });

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/build'));

app.get('/', (req,res)=>{res.sendFile('index.html');});
app.post('/register', (req, res) => {handleRegister(req, res, db)});
app.get('/*', (req,res)=>{handleFetchRequest(req, res, db)});

const port = process.env.PORT || 3007;

app.listen(port, ()=>{
	console.log(`We are on on port ${port}!`);
})

const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const fetch = require('./controllers/fetch');

const db = knex({
  client: 'pg',
  connection: {
  	// connectionString: process.env.DATABASE_URL,
  	// ssl: true
    host : 'localhost',
    user : 'ojaswa',
    password : 'ojaswa',
    database : 'ojaswa'
  }
});

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{res.send('it is working')});
app.post('/register', (req, res) => {register.handleRegister(req, res, db)});
app.get('/*', (req,res)=>{fetch.handleFetchRequest(req, res, db)});

app.listen(process.env.PORT || 3002, ()=>{
	console.log(`We are on on port ${process.env.PORT}!`);
})
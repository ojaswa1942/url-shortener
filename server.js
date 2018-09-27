const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{res.send('it is working')});

app.listen(process.env.PORT || 3000, ()=>{
	console.log(`We are on on port ${process.env.PORT}!`);
})
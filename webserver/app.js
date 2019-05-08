const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/users',(req,res)=>{
	let users = [
	{
		first_name : "John",
		last_name : "Doe",
		age : 34,
		gender : "female"
	},
	{
		first_name : "John",
		last_name : "Doe",
		age : 34,
		gender : "female"
	},
	{
		first_name : "John",
		last_name : "Doe",
		age : 34,
		gender : "female"
	},
	{
		first_name : "John",
		last_name : "Doe",
		age : 34,
		gender : "female"
	}
	]
	res.json(users);
	});

app.get('/downloads' , (req,res)=> {
	
	res.download(path.join(__dirname,'/downloads/classdaigram.pdf'));
	
});

app.get('/about',(req,res)=>{
	res.redirect('/about.html')
})

app.post("/subscribe",(req,res)=>{
	
	var name = req.body.name;
	var email= req.body.email;
	console.log(name + " "+email);
})

app.listen(3000,function(){
	console.log('Server started on port');
})
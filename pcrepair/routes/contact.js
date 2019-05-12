var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/',function(req,res){
	res.render('contact',{
	title : 'Contact'
	})
});

router.post('/send',function(req,res,next){
	var transporter = nodemailer.createTransport({
		service : "Gmail",
		auth : {
			user : "nikita.kumari181995@gmail.com",
			pass : "Kanha.123"
		}
	});
	
	var mailOptions = {
		from : "nikita.kumari181995@gmail.com",
		to : "neketa.kumare123@gmail.com",
		subject : "Hello from pcrepair",
		text : "You have a submission from "+req.body.name+" Email: "+req.body.email+" Phone Number: "+req.body.contact,
		html :"<p>You have a submission from </p><ul><li></li>Email"+req.body.email+"<li> Name: "+req.body.name+"</li><li>Phone Number: "+req.body.contact+"</li></ul>"
	};
	
	transporter.sendMail(mailOptions, function(error,info){
		if(error)
			console.log("Error"+error);
		else
			console.log("Message sent::"+info);
		res.redirect('/');
	});
});

module.exports = router;
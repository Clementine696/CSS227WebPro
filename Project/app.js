const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser");
	  
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

const prints = [
	{name:"Ironman", Artist:"Patum", url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/986a427f-f85d-4868-964e-a3dc032af374?dfbbc76d138f5f4f98c74afa28020835"},
	{name:"Ironman2", Artist:"Patum", url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/c1fca3ad-ca2a-44d1-97d8-f57a0b423bff?db0a258d88915f646d4bb0354deb6d7f"},
	//{name:"Ironman3", Artist:"Patum", url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/5f7f6e2f-633c-437e-b1c2-d0dee3f77f2f?6d403688376b1d973d4a2911f652c41a"},
	{name:"Ironman4", Artist:"Patum", url:"https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/277218557_515360560193996_8457476322687137275_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFeMWeIf_Q6vvGAeo3Ry_F2Zco3ya2fe8xlyjfJrZ97zMQAwwwxRtArZpEhALZK0DZAivaUkfK90rvtbsJIMZqo&_nc_ohc=ZIU4ldTIND4AX-oChuF&tn=Miyy4RZrYCLj7pYq&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_T33jlOqy0Qruz0XdmrzHE6ZRzFfiu-cFEVLMq4Qc8IQ&oe=623F3D59"}

];

app.get("/", function(req, res){
	res.render("landing.ejs");
});

app.get("/prints", function(req, res){
	res.render("index.ejs",{prints:prints});
});

app.post("/prints", function(req, res){
	let name = req.body.name;
	let Artist = req.body.Artist;
	let url = req.body.url;
	let newPrint = {name:name, Artist:Artist, url:url};
	prints.push(newPrint);
	res.render("index.ejs",{prints:prints});
})

app.get("/prints/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
		console.log("Activated");
});
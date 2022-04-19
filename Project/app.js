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
	{name:"Ironman3", Artist:"Patum", url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/5f7f6e2f-633c-437e-b1c2-d0dee3f77f2f?6d403688376b1d973d4a2911f652c41a"},
	{name:"Ironman4", Artist:"Patum", url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/5f7f6e2f-633c-437e-b1c2-d0dee3f77f2f?6d403688376b1d973d4a2911f652c41a"}

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
var express = require("express");

var app = express.createServer();

app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname));

app.get("/", function(req, res) {
	res.redirect("/index.html");
});

app.listen(process.env["app_port"] || 3000);

console.log("\n<<< started");

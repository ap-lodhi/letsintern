var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    var route = req.url
    if(route=='/'){
        res.end('this the server ')
    }

    if(route =='/username'){
        var users = ['anil','patel', 'ap-lodhi']
        res.end(JSON.stringify(users))
    }
}).listen(8080)


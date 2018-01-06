
const express = require('express');  
const request = require('request');
const PORT = process.env.PORT || 3000;
let server = express();
server.set('port', PORT);
server.use('/proxy', (req, res) =>   req.pipe(request(req.url.replace('/?url=',''))).pipe(res));
server.get('/proxy/:url', (req, res) => request(req.param.url, (error, response, body) => res.send(body)));
server.listen(server.get('port'), () => console.log('Express server listening on port ' + server.get('port')));
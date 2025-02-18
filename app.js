const express = require('express'); 
const app = express();
const router = express.Router();

const path = __dirname + '/views/'; 
const port = 8080;

router.use(function (req, res, next) { 
    console.log('/' + req.method); 
    next();
});

router.get('/', function(req, res) { 
    res.sendFile(path + 'index.html');
});

router.get('/containers', function(req, res) { 
    res.sendFile(path + 'containers.html');
}); 

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('The Hilltop app is listening on port 8080!');
    console.log('Server started successfully at:', new Date().toISOString());
    console.log('Serving static files from:', path);
    console.log(`Access the app in your browser at http://localhost:${port}/`);
});

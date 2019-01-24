var express = require('express');
var app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
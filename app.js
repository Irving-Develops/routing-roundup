const express = require('express');

const app = express();
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.send('Hello from Express!');
})



app.all('*', (req, res) => {
    res.render("app", {
        method: req.method,
        path: req.path,
        randomNumber: 7
    })
})

const port = 8081;

app.listen(port, () => console.log(`listening on port ${port}`));

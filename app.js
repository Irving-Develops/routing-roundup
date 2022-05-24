const express = require('express');

const routes = require('./routes/routers');


const app = express();
app.set('view engine', 'pug')


app.use('/margot/', routes)
app.use('/margeaux/', routes)

// app.use('/capital-letters/', routes);



app.get('/', (req, res) => {
    res.send('Hello from Express!');
})


app.get('/*xyz', (req, res) => {
    res.send("That's all I wrote.");
    // /product/: id(\\d + )
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

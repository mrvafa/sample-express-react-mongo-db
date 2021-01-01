const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
let mongoose = require("mongoose");
const path = require("path");
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'table', 'build')));

app.post('/', (req, res) => {
    // mongoose.Promise = global.Promise;
    mongoose.connect("mongodb+srv://mrvafa:iZtcKBqP9UitjWxR@cluster0.gblm3.mongodb.net/form_db?retryWrites=true&w=majority");
    let nameSchema = new mongoose.Schema({
        'firstName': String,
        'lastName': String,
        'email': String,
        'age': Number,
    });
    let User = mongoose.model("User", nameSchema);
    if (req.body.firstName !== '' && req.body.lastName !== '' && req.body.email !== '' && req.body.age !== '') {
        let myData = new User(req.body);
        myData.save()
            .then(item => {
                res.sendFile(path.join(__dirname, 'table', 'build', 'index.html'));
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    }
    res.status(400).send("Error");
    // return res.sendFile(path.join(__dirname, 'table', 'build', 'index.html'));
})


app.get('/get-forms', function (req, res) {
    mongoose.connect("mongodb+srv://mrvafa:iZtcKBqP9UitjWxR@cluster0.gblm3.mongodb.net/form_db?retryWrites=true&w=majority", function (err, db) {
        db.collection('users')
            .find()
            .toArray(function (err, user) {
                // res.json(user);
                return res.send(user);
            });
    });
});


app.get('/forms', function (req, res) {
   res.sendFile(path.join(__dirname, 'table', 'build', 'index.html'))
});

app.listen(8080)

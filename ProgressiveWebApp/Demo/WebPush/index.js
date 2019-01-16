const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
const publicVapidKey = "BMzTVodT8ohIo1XjCcbtVyIKc4hD4VZ1S9JZ-Mvbi3uygFiUb-nc0BBbLyPHy-peAxaAMlyeSAf6yvFrVVhXcAI";

const privateVapidKey = "h2T_8QoqCDsT-xTws0wUQOfiCbqH-R7fTCOpQqqYA2Y";

webpush.setVapidDetails('mailto:ngohungphuc95@gmail.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    // A PushSubscription contains all the information we need to send a push
    // message to that user. You can "kind of" think of this as an ID for that
    // user's device.
    const subscription = req.body;

    //send 201 status code
    res
        .status(201)
        .json({});

    //create payload
    const payload = JSON.stringify({title: "push notification"});

    //pass pbject to sendNotification
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.log(err));
});

app.listen(5000, () => console.log('Server start'));
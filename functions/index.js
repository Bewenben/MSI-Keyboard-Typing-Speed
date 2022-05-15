const functions = require("firebase-functions");
const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const app = require("https-localhost")();
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
admin.initializeApp();
const homeroute = require("./routes/home.js")
const signuproute = require("./routes/signup.js")
const practiceroute = require("./routes/practice.js")
const competitionroute = require("./routes/competition.js")
const competition2ndroute = require("./routes/compt2nd.js")
const competition3rdroute = require("./routes/compt3rd.js")
const competition4throute = require("./routes/compt4th.js")
const competition5throute = require("./routes/compt5th.js")
const competition6throute = require("./routes/compt6th.js")
const competition7throute = require("./routes/compt7th.js")
const leaderboardsroute = require("./routes/leaderboards.js")

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));

app.use("/", homeroute)

app.use("/index", homeroute);

app.use("/signup", signuproute)

app.use("/practice", practiceroute)

app.use("/competition", competitionroute)

app.use("/competition2", competition2ndroute)

app.use("/competition3", competition3rdroute)

app.use("/competition4", competition4throute)

app.use("/competition5", competition5throute)

app.use("/competition6", competition6throute)

app.use("/competition7", competition7throute)

app.use("/leaderboards",leaderboardsroute)

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.post("/competition", async (req, res) => {

    const { Name, Email, Number, Faculty, University} = req.body;

    const first_Trial_WPM = "0";
    const first_Trial_CPM = "0";
    const second_Trial_WPM = "0";
    const second_Trial_CPM = "0";
    const third_Trial_WPM = "0";
    const third_Trial_CPM = "0";
    const fourth_Trial_WPM = "0";
    const fourth_Trial_CPM = "0";
    const fifth_Trial_WPM = "0";
    const fifth_Trial_CPM = "0";
    const sixth_Trial_WPM = "0";
    const sixth_Trial_CPM = "0";
    const seventh_Trial_WPM = "0";
    const seventh_Trial_CPM = "0";

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[Name ,Number, Faculty, University]], range: `'${range}'!B${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    if (rows == ""){
        await googleSheets.spreadsheets.values.append({

            auth,
            spreadsheetId,
            range: "Sheet1!A:S",
            valueInputOption: "USER_ENTERED",
    
            resource: {
                values: [
                    [Email, Name, Number, Faculty, University, first_Trial_WPM, first_Trial_CPM, second_Trial_WPM, second_Trial_CPM , third_Trial_WPM, third_Trial_CPM, fourth_Trial_WPM, fourth_Trial_CPM, fifth_Trial_WPM, fifth_Trial_CPM, sixth_Trial_WPM, sixth_Trial_CPM, seventh_Trial_WPM, seventh_Trial_CPM]
                ]
            }
        })
    }

    res.render("competition");
});

app.post("/competition2", async (req, res) => {

    const { Email, first_Trial_WPM, first_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[first_Trial_WPM, first_Trial_CPM]], range: `'${range}'!F${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition2")

});

app.post("/competition3", async (req, res) => {

    const { Email, second_Trial_WPM, second_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[second_Trial_WPM, second_Trial_CPM]], range: `'${range}'!H${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition3");
});

app.post("/competition4", async (req, res) => {

    const { Email, third_Trial_WPM, third_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[third_Trial_WPM, third_Trial_CPM]], range: `'${range}'!J${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition4");
});

app.post("/competition5", async (req, res) => {

    const { Email, fourth_Trial_WPM, fourth_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[fourth_Trial_WPM, fourth_Trial_CPM]], range: `'${range}'!L${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition5");
});

app.post("/competition6", async (req, res) => {

    const { Email, fifth_Trial_WPM, fifth_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[fifth_Trial_WPM, fifth_Trial_CPM]], range: `'${range}'!N${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition6");
});

app.post("/competition7", async (req, res) => {

    const { Email, sixth_Trial_WPM, sixth_Trial_CPM} = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[sixth_Trial_WPM, sixth_Trial_CPM]], range: `'${range}'!P${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("competition7");
});

app.post("/leaderboards" , async function(req, res, next) {

    const { Email, seventh_Trial_WPM, seventh_Trial_CPM } = req.body;

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",

        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1YYrUFG4xKlrGJB5VDf4GwTKbBPxE_etb_fKnsJQiSO8";

    const range = "Sheet1";
    const values = (await googleSheets.spreadsheets.values.get({spreadsheetId, range})).data;
    const rows = values.values.map(([a], i) => (a == Email ? i + 1 : "")).filter(String);
    const data = rows.map((e) => ({values: [[seventh_Trial_WPM, seventh_Trial_CPM]], range: `'${range}'!R${e}`}));
    await googleSheets.spreadsheets.values.batchUpdate({spreadsheetId, resource: {valueInputOption: "USER_ENTERED", data}});

    res.render("leaderboards");
});


app.listen(25565, (req, res) => console.log("running on port 25565"));

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);


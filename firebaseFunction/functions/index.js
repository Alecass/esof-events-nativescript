const functions = require("firebase-functions");
const data = require("./people");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(`
  <h1>Hello world</h1>
  <p>pagina html from <b>firebase function</b></p>
  `);
});

exports.helloWorld2 = functions.https.onRequest((req, res) => {
    console.log(req.query.nome);
    res.send(`<h2>Ciao ${req.query.nome}</h2>`);
});

exports.helloWorldJson = functions.https.onRequest((req, res) => {
    res.json({ people: data });
});

exports.helloNome = functions.https.onCall((data, context) => {
    return {
        status: "Ok",
        messaggio: `Ciao, ${data}`
    };
});

exports.test = functions.https.onRequest((req, res) => {
    // const answer = req.body.body;
    req.body.answer == "si"
        ? res.json("bravo hai detto si")
        : res.json("bravo hai detto no");
});
//API A PAGAMENTO
// exports.scheduleFunction = functions.pubsub
//   .schedule("every 1 minutes")
//   .onRun(context => {
//     console.log("Fire ogni 5 minuti");
//     return null;
//   });

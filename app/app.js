const application = require("tns-core-modules/application");
const config = require("./config");
const MapAPI = config.google.map.provideAPIKey || "apiKey";
// Google Maps SDK API KEY
if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
}

var firebase = require("nativescript-plugin-firebase");

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    
    iOSEmulatorFlush:true,
    persist:false,
    // onAuthStateChanged: function(data) {
    //     console.log(data.loggedIn ? 'Logged' : 'Logged out')
    //     if(data.loggedIn){
    //         console.log('USER',user)
    //     }
    // }
}).then(
    function () {
        console.log("firebase.init done");
        const schdeule = firebase.firestore.collection("schedule")

        schdeule.get
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
    );
    
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

var dialogs = require("tns-core-modules/ui/dialogs");
const firebase = require("nativescript-plugin-firebase");
const ScheduleItemsViewModel = require("./schedule-items-view-model");

// firebase.logout().then(() => {
//     console.log('LOG OUT')
// }).catch(error => console.error(error))

// firebase.getCurrentUser().then(user =>{
//     console.log("user", user)
// }).catch(error => console.error(error))

// firebase.sendPasswordResetEmail('alessiocass99@gmail.com').then(() => console.log('password reset sent by email')).catch(error => console.error(error))

// firebase
//     .login({
//         type: firebase.LoginType.ANONYMOUS
//     })
//     .then(user => console.log("User uidd: " + user.uid))
//     .catch(error => console.log("Trouble in paradise: " + error));

const viewModel = new ScheduleItemsViewModel();
viewModel.set("Logged", true);

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ScheduleItemsViewModel();
}

const fn = firebase.functions.httpsCallable("helloNome");

function showDialog() {
    console.log("LOGIN");
    dialogs
        .login({
            title: "LOGIN",
            message: "Enter Credentials",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral button text",
            userName: "User",
            password: "Password"
        })
        .then(function(r) {
            if (r.result) {
                firebase
                    .login({
                        type: firebase.LoginType.PASSWORD,
                        passwordOptions: {
                            email: r.userName,
                            password: r.password
                        }
                    })
                    .then(result => {
                        // console.log('ok', result)
                        alert({
                            title: "Autenticazione ok",
                            message: `Welcome ${result.email}`,
                            okButtonText: "OK"
                        });
                        if (!result.emailVerified) {
                            console.log("emailVerified", result.emailVerified);
                        }
                    })
                    .catch(err => {
                        alert({
                            title: "Error",
                            message: `${err}`,
                            okButtonText: "OK"
                        });
                    });
            } else {
                console.log("cancel");
            }
        });
}
exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;
exports.showFunctions = function() {
    fn("firebase-from-NativeScript").then(mydata => {
        alert({
            title: "Firebase function output",
            message: `${mydata.messaggio}`,
            okButtonText: "Ok"
        });
    });
    alert("okokok");
};

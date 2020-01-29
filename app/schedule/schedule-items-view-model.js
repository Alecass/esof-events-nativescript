const observableModule = require("tns-core-modules/data/observable");

const firebase = require("nativescript-plugin-firebase");

let schedule = firebase.firestore.collection("schedule");
// let currentUser = "not Authenticated"

const ObservableArray = require("tns-core-modules/data/observable-array")
    .ObservableArray;
const scheduleData = new ObservableArray();

schedule.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const items = doc.data();
        items.sub = `${items.inizio} - ${items.fine} ${items.luogo}`;
        scheduleData.push(items);
    });
});
//   function getUser(){
//     firebase.getCurrentUser().then(result =>{
//         console.log("current user: " + result)
//         currentUser = result.email
//     })
// }

console.log("data", scheduleData);

function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: scheduleData,
        myGroupingFunc: function(item) {
            return item.group;
        },
        Logged: false,
        isCorrect: ""
    });
    return viewModel;
}

module.exports = ScheduleItemsViewModel;

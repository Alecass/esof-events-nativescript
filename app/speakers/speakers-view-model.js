const data = require('./data');

const firebase = require("nativescript-plugin-firebase")
let speakers = firebase.firestore.collection("speakers")

const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const speakersData = new ObservableArray();

//  data.forEach(element => {
//      speakers.add(element)
//  });

speakers.get().then(querySnapshot => {
    querySnapshot.forEach((doc) => {
        const item = doc.data()
        item.interventocompleto = `${item.nome} - ${item.inizio} ${item.luogo}`
        speakersData.push(item)
    })
})

function SpeakerViewModel() {
    const viewModel = {
        items: speakersData
    }
    return viewModel;
}

module.exports = SpeakerViewModel;

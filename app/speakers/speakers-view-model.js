const observableModule = require("tns-core-modules/data/observable");
const data = require('./data');
const redata = data.map((item) => {
    item.interventocompleto = `${item.nome} — ${item.inizio} ${item.fine}`
    return item
});
function SpeakerViewModel() {
    const viewModel = observableModule.fromObject({
       items: redata
    });
    return viewModel;
}

module.exports = SpeakerViewModel;

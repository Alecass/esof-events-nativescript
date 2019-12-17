const observableModule = require("tns-core-modules/data/observable");

function MapViewModel() {
    const viewModel = observableModule.fromObject({
        latitude: 45.6522854,
        longitude: 13.7661518,
        zoom: 14
    });

    return viewModel;
}

module.exports = MapViewModel;

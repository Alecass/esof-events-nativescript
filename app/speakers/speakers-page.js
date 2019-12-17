const SpeakersViewModel = require("./speakers-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SpeakersViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

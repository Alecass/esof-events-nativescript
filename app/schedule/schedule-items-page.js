const ScheduleItemsViewModel = require("./schedule-items-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ScheduleItemsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

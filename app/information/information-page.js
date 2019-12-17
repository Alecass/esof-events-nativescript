const SearchViewModel = require("./information-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SearchViewModel();
}

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("map/map-page");
    // alert('FIRE!!!!');
}


exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;

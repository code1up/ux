(function() {
    var _container = {
        realtimeFit: true,
        arrangerKind: "CollapsingArranger",
        style: "background-color: blue;"
    };

    enyo.kind({
        name: "HomePanel",
        kind: ""
        fit: true,
    
        components:[
            _container
        ],
    });
}()};

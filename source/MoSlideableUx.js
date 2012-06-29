(function() {

    var _toolbar = {
        name: "toolbar",
        kind: "onyx.Toolbar",

        components: [
            {
                content: "Go To"
            },
            {
                kind: "onyx.Button",
                content: "Hello"
            },
            {
                kind: "onyx.Button",
                content: "0"
            },
            {
                kind: "onyx.Button",
                content: "1"
            },
            {
                kind: "onyx.Button",
                content: "2"
            }
        ]
    };

    var _slideable0 = {
        name: "slideable0",
        kind: "enyo.Slideable",

        axis: "h",
        draggable: true,
        min: -192,
        value: -192,
        unit: "px",

        style: "background-color: cornflowerblue; width: 240px; height: 240px; position: absolute; z-index: 1;",

        components: [
            {
                kind: "onyx.Toolbar",
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        fit: true
                    },
                    {
                        kind: "onyx.Grabber",
                        name: "grabber0",
                        style: "min-width: 23px; min-height: 27px;"

                        // tap: _onTapGrabber
                    }
                ]
            },
            {
                style: "float: right; width: 48px; height: 100%; background-color: blue;"
            }
        ]
    };


    enyo.kind({
        name: "MoSlideableUx",
        kind: "enyo.FittableRows",

        classes: "enyo-fit onyx",

        components:[
            _toolbar,
            _slideable0
        ]
    });
}());

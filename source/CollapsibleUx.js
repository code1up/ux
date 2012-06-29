(function() {

    var _onSetupItem = function(inSender, inEvent) {
        var index = inEvent.ndex;
        var item = inEvent.item;

        item.$.itemText.setContent("Service " + item);

        enyo.log(item.$.itemText.getContent());
        console.log(index);

        return true;
    };

    var _onAnimateFinish = function(inSender, inEvent) {
        enyo.log("onAnimateFinish");
    };

    var _item = {
        name: "item",
        kind: "enyo.Slideable",

        onAnimateFinish: "_onAnimateFinish",

        axis: "h",
        draggable: true,
        min: 0,
        max: 96,
        value: 0,
        unit: "px",

        style: "width: 240px; height: 48px;",

        components: [
            {
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        fit: true,
                        content: "Services"
                    },
                    {
                        kind: "onyx.Grabber",
                        name: "itemGrabber",
                        style: "min-width: 23px; min-height: 27px;"

                        // tap: _onTapGrabber
                    }
                ]
            }
        ]
    };

    var _repeater = {
        kind: "enyo.Repeater",
        name: "repeater",

        // fit: true,

        onSetupItem: _onSetupItem,

        components: [
            {
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        kind: "onyx.Button",
                        style: "z-index: 0",
                        content: "Delete",
                        showing: false
                    },
                    _item
                ]
            }
        ],

        count: 100
    };

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
        layoutKind: "FittableRowsLayout",

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
                        content: "Services",
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
                layoutKind: "FittableColumnsLayout",
                fit: true,

                components: [
                    {
                        content: "Services",
                        style: "background-color: white;"
                    }
                ]
            }
        ]
    };

    var _panels = {
        kind: "enyo.Panels",
        arrangerKind: "CollapsingArranger",

        fit: true,
        realtimeFit: true,

        components: [
            {
                content: "1",
                classes: "panelContent",
                style: "min-width: 256px; background-color: red;"
            },
            {
                content: "1a",
                // classes: "panelContent",
                style: "min-width: 256px; background-color: cornflowerblue;",
                showing: false
            },
            {
                content: "2",
                classes: "panelContent",
                style: "min-width: 256px; background-color: silver;",
                layoutKind: "FittableRowsLayout",

                components: [
                    {
                        content: "SCROLLER"
                    },
                    {
                        kind: "enyo.Scroller",
                        fit: true,

                        components: [
                            _repeater
                        ]
                    }
                ]
            },
            {
                content: "3",
                classes: "panelContent",
                style: "min-width: 256px; background-color: yellow;"
            }
        ]
    };

    enyo.kind({
        name: "CollapsibleUx",
        kind: "enyo.FittableRows",

        classes: "enyo-fit onyx",

        components:[
            _toolbar,
            _slideable0,
            _panels
        ]
    });
}());

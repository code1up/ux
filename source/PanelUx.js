(function() {
    
    var _onTapGrabber = function(inSender, inEvent) {
        enyo.log("zen.App::onTapGrabber");

        enyo.log(inSender.getName());
        enyo.log(inSender.getParent().getName());

        // _tooltip.requestShow();
        // this.$.alertSettingsSlideable.toggleMinMax();

        var hide = [];
        var show;

        if (inSender.getName() === "grabber0") {
            this.getOwner().$.slideable0.toggleMinMax();
            this.getOwner().$.calendar.setShowing(true);
            this.getOwner().$.calendar.toggleMinMax();

            this.getOwner().$.slideable1.setMin(-320);
            this.getOwner().$.slideable1.animateToMin();

            this.getOwner().$.slideable2.setMin(-320);
            this.getOwner().$.slideable2.animateToMin();

            // _slideable2.setMin(-400);
        }
    };

    var _calender = {       
        name: "calendar",
        kind: "enyo.Slideable",

        axis: "h",
        draggable: true,
        min: -192,
        value: -192,
        unit: "px",

        style: "background-color: green; width: 240px; height: 400px; position: absolute; z-index: 1; top: 48px",
        showing: false
    };

    var _slideable0 = {
        name: "slideable0",
        kind: "enyo.Slideable",

        axis: "h",
        draggable: true,
        min: -192,
        value: -192,
        unit: "px",

        style: "background-color: red; width: 240px; position: absolute; z-index: 1",

        components: [
            {
                kind: "onyx.Toolbar",
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        content: ""
                    },
                    {
                        fit: true
                    },
                    {
                        kind: "onyx.Grabber",
                        name: "grabber0",
                        style: "min-width: 23px; min-height: 27px;",

                        tap: _onTapGrabber
                    }
                ]
            }
        ]
    };

    var _slideable1 = {
        name: "slideable1",
        kind: "enyo.Slideable",

        axis: "h",
        draggable: true,
        min: -192,
        value: -192,
        unit: "px",

        style: "background-color: red; width: 240px; position: absolute; z-index: 1; top: 48px;",

        components: [
            {
                kind: "onyx.Toolbar",
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        content: ""
                    },
                    {
                        fit: true
                    },
                    {
                        kind: "onyx.Grabber",
                        name: "grabber1",
                        style: "min-width: 23px; min-height: 27px;",

                        tap: _onTapGrabber
                    }
                ]
            }
        ]
    };

    var _slideable2 = {
        name: "slideable2",
        kind: "enyo.Slideable",

        axis: "h",
        draggable: true,
        min: -192,
        value: -192,
        unit: "px",

        style: "background-color: red; width: 240px; position: absolute; z-index: 1; top: 96px;",

        components: [
            {
                kind: "onyx.Toolbar",
                layoutKind: "FittableColumnsLayout",

                components: [
                    {
                        content: ""
                    },
                    {
                        fit: true
                    },
                    {
                        kind: "onyx.Grabber",
                        name: "grabber2",
                        style: "min-width: 23px; min-height: 27px;",

                        tap: _onTapGrabber
                    }
                ]
            }
        ]
    };

    var _panels = {
        name: "panels",
        kind: "enyo.Panels",
        layoutKind: "FittableRowsLayout",

        // arrangerKind: "TopBottomArranger",
        arrangerKind: "TopBottomArranger",
        // arrangerKind: "CarouselArranger",
        // layoutKind: "FittableRowsLayout",

        fit: true,
        // realtimeFit: true,

        components: [
            {
                name: "panel0",
                content: "0",
                style: "background-color: cornflowerblue; min-height: 120px;"
            },
            {
                name: "panel1",
                content: "1",
                style: "background-color: yellow; min-height: 120px;"
            },
            {
                name: "panel2",
                content: "2",
                style: "background-color: purple; min-height: 120px;"
                // fit: true
            }
        ]
    };

    var _header = {
        // kind: "enyo.Control",

        components: [
            {
                content: "HELLO",
                style: "background-color: cornflowerblue; height: 48px;"
            }
        ]
    };

    var _scroller = {
        name: "scroller",
        kind: "enyo.Scroller",

        fit: true,

        style: "background-color: hotpink;",

        components: [
            {
                kind: "enyo.Control",

                components: [
                    // _header,
                    // _panels
                ]
            }
        ]
    };

    enyo.kind({
        name: "PanelUx",
        kind: "enyo.FittableRows",

        classes: "enyo-fit onyx",

        components:[
            _slideable0,
            _calender,
            _slideable1,
            _slideable2,
            _header,
            _panels,
            {
                content: "XXX",
                fit: true
            }
        ]
    });
}());

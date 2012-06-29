(function() {

	var _index = 0;
    
	var _expand = function(inSender, inEvent) {
		var that = inSender.getOwner();

		_index = ++_index % 3;

		enyo.log(_index);

		that.$.panels.setIndex(_index);
		// that.$.panels.render();

		// that.$.panels.setIndex(_index);
	};

	var _goto = function(inSender, inEvent) {
		var that = inSender.getOwner();

		_index = inSender.content;

		enyo.log(_index);

		that.$.panels.setIndex(_index);
		// that.$.calendar.hide();
	};

    var _toolbar = {
		name: "toolbar",
		kind: "onyx.Toolbar",

		components: [
			{
				kind: "onyx.Button",
				content: "Hello",
				tap: _expand
			},
			{
				kind: "onyx.Button",
				content: "0",
				tap: _goto
			},
			{
				kind: "onyx.Button",
				content: "1",
				tap: _goto
			},
			{
				kind: "onyx.Button",
				content: "2",
				tap: _goto
			}
		]
    };

	var _panels = {
		name: "panels",
		kind: "enyo.Panels",
		// arrangerKind: "CollapsingArranger",
		layoutKind: "enyo.FittableRowsLayout",

		arrangerKind: "TopBottomArranger",
		// arrangerKind: "CarouselArranger",

		fit: true,
		realtimeFit: true,

		components: [
			{
				layoutKind: "enyo.FittableRowsLayout",

				components: [
					{
						name: "calendarHeader",
						content: "CALENDAR HEADER",
						style: "background-color: cornflowerblue;"
						// style: "background-color: cornflowerblue; min-height: 48px; max-height: 48px;"
					},
					{
						name: "calendar",
						content: "CALENDAR",
						style: "background-color: red;",
						fit: true
					}
				]
			},
			{
				layoutKind: "enyo.FittableRowsLayout",

				components: [
					{
						name: "timeHeader",
						content: "TIME HEADER",
						style: "background-color: blue;"
						// style: "background-color: blue; min-height: 48px; max-height: 48px;",
					},
					{
						name: "time",
						content: "TIME",
						style: "background-color: purple;",
						fit: true
					}
				]
			},
			{
				name: "scroller",
				kind: "enyo.Scroller",

				// fit: true,

				style: "background-color: hotpink;",

				components: [
					{
						content: "SCROLLER"
					}
				]
			}
		]
	};

	enyo.kind({
		name: "SlideableUx",
        kind: "enyo.FittableRows",

        classes: "enyo-fit onyx",

		components:[
			_toolbar,
			_panels
		]
	});
}());

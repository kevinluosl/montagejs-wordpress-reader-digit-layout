/**
 * @module ui/list.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;

/**
 * @class List
 * @extends Component
 */
exports.List = Component.specialize( /** @lends List# */ {
	constructor: {
		value: function List() {
			this.super();
		}
	},

	//Passed in RssController, see how we binding data from it
	contentController: {
		value: null
	},

	selectedArticle: {
		value: null
	},

	isView: {
		value: false
	},

	selectedIndex: {
		value: 0
	},

	enterDocument: {
		value: function( firstTime ) {
			if ( firstTime ) {

			}
		}
	},

	templateDidLoad: {
		value: function() {

			this.addPathChangeListener( "templateObjects.rep.selection.0",
				this, "handleSelection" );

		}
	},

	openNext: {
		value: function() {
			if ( this.selectedIndex + 1 <= this.templateObjects.rep.content.length - 1 ) {
				this.selectedArticle = this.templateObjects.rep.content[this.selectedIndex + 1 ];
				this.selectedIndex = this.selectedIndex + 1;
			}
		}
	},

	openPrev: {
		value: function() {
			if ( this.selectedIndex - 1 >= 0 ) {
				this.selectedArticle = this.templateObjects.rep.content[this.selectedIndex - 1 ];
				this.selectedIndex = this.selectedIndex - 1;
			}
		}
	},

	handleSelection: {
		value: function( selected ) {
			this.selectedIndex = this.templateObjects.rep.selectedIndexes[this.templateObjects.rep.selectedIndexes.length - 1];
			if ( selected && document.body.clientWidth <= 800 ) {
				this.isView = true;
			}
		}
	}


} );

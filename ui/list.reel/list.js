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

	templateDidLoad: {
		value: function() {

			this.addPathChangeListener( "templateObjects.rep.selection.0",
				this, "handleSelection" );

		}
	},

	handleSelection: {
		value: function( selected ) {
			var $this = this;
			if ( selected ) {
				this.toggleSwitch.checked = true;
			}
		}
	}


} );

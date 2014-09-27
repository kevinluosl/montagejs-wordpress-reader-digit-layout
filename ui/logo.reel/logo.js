/**
 * @module ui/logo.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;

/**
 * @class Logo
 * @extends Component
 */
exports.Logo = Component.specialize( /** @lends Logo# */ {
	constructor: {
		value: function Logo() {
			this.super();
		}
	},

	showBack: {
		value:false
	},

	templateDidLoad: {
		value: function() {

			this.backButton.addEventListener( "action", this );

		}
	},

	handleEvent: {
		value: function( e ) {
			this.list.isView = false;
		}
	}




} );

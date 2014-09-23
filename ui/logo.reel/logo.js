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
		set: function( value ) {

			if ( document.getElementsByClassName( 'Footer' ).length > 0 &&
				window.getComputedStyle( document.getElementsByClassName( 'Footer' )[0] ).display === 'none' ) {
				this._showBack = false;
			} else {
				this._showBack = value;
			}
		},

		get: function() {
			return this._showBack;
		}
	},

	templateDidLoad: {
		value: function() {

			this.backButton.addEventListener( "action", this );

		}
	},

	handleEvent: {
		value: function( e ) {
			this.toggleSwitch.checked = false;
		}
	}




} );

var Montage = require( "montage" ).Montage;

exports.RssSite = Montage.specialize( {

	constructor: {
		value: function RssSite() {
		}
	},

	name: {
		value: null
	},

	description: {
		value: null
	},

	init: {
		value: function( rssData ) {
			this.name = rssData.name;
			this.description = rssData.description;

			return this;
		}
	}
} );

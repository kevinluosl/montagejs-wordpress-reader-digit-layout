var Montage = require( "montage" ).Montage;

exports.RSSCategory = Montage.specialize( {

	constructor: {
		value: function RSSCategory() {
		}
	},

	name: {
		value: null
	},

	slug: {
		value: null
	},

	count: {
		value: null
	},

	init: {
		value: function( rssData ) {
			this.name = rssData.name;
			this.slug = rssData.slug;
			this.count = rssData.count;

			return this;
		}
	}
} );

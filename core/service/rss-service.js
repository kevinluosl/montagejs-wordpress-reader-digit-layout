var Montage = require( "montage/core/core" ).Montage,
	Reqwest = require( "../tools/reqwest" );

exports.RssService = Montage.specialize( {

	url: {
		value: 'http://104.131.138.118/wp-json'
	},

	constructor: {
		value: function RssService() {

		}
	},

	getCategories: {
		value: function() {
			return this._makeRequest( this.url + '/taxonomies/category/terms' );
		}
	},

	getSiteInfo: {
		value: function() {
			return this._makeRequest( this.url );
		}
	},

	getPostData: {
		value: function( category ) {
			var filter = '';
			if ( category ) {
				filter = "?filter[category_name]=" + category
			}

			return this._makeRequest( this.url + '/posts' + filter );
		}
	},

	_makeRequest: {
		value: function( url, filter ) {

			return Reqwest( {
				url: url,
				type: "jsonp",
				method: "get",
				jsonpCallback: "_jsonp",
				jsonpCallbackName: "cb"
			} );
		}
	}

} )
var Montage = require( "montage/core/core" ).Montage

exports.RssService = Montage.specialize( {

	url: {
		value: ''
	},

	constructor: {
		value: function RssService( url ) {
			this.url = url;
		}
	},

	getCategories: {
		value: function( handler ) {
			return this._makeRequest( this.url + '/taxonomies/category/terms', handler );
		}
	},

	getSiteInfo: {
		value: function( handler ) {
			this._makeRequest( this.url, handler );
		}
	},

	getPostData: {
		value: function( category, handler ) {
			var filter = '';
			if ( category ) {
				filter = "?filter[category_name]=" + category
			}

			this._makeRequest( this.url + '/posts' + filter, handler );
		}
	},

	_makeRequest: {
		value: function( url, handler ) {

			var xmlHttp = new XMLHttpRequest();

			xmlHttp.onreadystatechange = function() {
				if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
					handler( JSON.parse( xmlHttp.responseText ) );
				}
			};

			xmlHttp.open( "get", url, true );
			xmlHttp.send();

		}
	}

} )
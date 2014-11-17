var Montage = require( "montage" ).Montage,
	RssService = require( "../service/rss-service" ).RssService

exports.RssController = Montage.specialize( {

	constructor: {
		value: function RssController() {

		}
	},

	categoryCache: {
		value: {}
	},

	// Property with setter and getter
	rssUrl: {
		set: function( val ) {
			this._rssUrl = val;
		},

		get: function() {
			return this._rssUrl;
		}
	},

	//Property
	rssService: {
		value: null
	},
	filterTerm: {
		value: null
	},

	_articles: {
		value: null
	},

	categories: {
		value: null
	},

	_category: {
		value: null
	},

	category: {
		set: function( value ) {
			this._category = value;

			if ( value ) {
				this.initPostData();
			}

		},

		get: function() {
			return this._category;
		}
	},

	initSiteInfo: {
		value: function() {
			var self = this;
			this.rssService.getSiteInfo( function( result ) {
				self.site = result;
			} )

		}
	},

	initCategories: {
		value: function() {
			var self = this;
			this.rssService.getCategories( function( result ) {
				var categories = [
					{name: 'Recent Posts', slug: 'all', count: '-1'}
				];
				for ( var i = 0; i < result.length; i++ ) {

					categories.push( result[i] );
				}
				self.categories = categories;
			} );

		}
	},

	initPostData: {
		value: function() {
			var self = this;

			if ( this.categoryCache[this.category ] ) {
				self._articles = this.categoryCache[this.category ];
				return;
			}

			this.rssService.getPostData( this.category == "all" ? "" : this.category, function( result ) {
				var articles = [];
				for ( var i = 0; i < result.length; i++ ) {

					articles.push( result[i] );
				}
				self._articles = articles;
				self.categoryCache[ self.category ] = self._articles;
			} )
		}
	},

	handleRssUrlChange: {
		value: function() {

			if ( !this.rssUrl ) {
				return;
			}
			this.rssService = new RssService( this.rssUrl );

			this.category = "";

			//get target WordPress site info
			this.initSiteInfo();

			//Get category list
			this.initCategories();
			//get post list
			this.initPostData();
		}

	},

	didCreate: {
		value: function() {

			this.addOwnPropertyChangeListener( "_articles", this, false );
			this.addOwnPropertyChangeListener( "filterTerm", this, false );
			this.addPathChangeListener( "rssUrl", this, "handleRssUrlChange" );

		}
	},

	handlePropertyChange: {
		value: function( value, key ) {
			var self = this;

			if ( key === "_articles" || key === "filterTerm" ) {
				if ( this._articles ) {
					this.articles = this._articles.filter( function( article ) {
						return !self.filterTerm ||
							article.title.toLowerCase()
								.indexOf( self.filterTerm.toLowerCase() ) >= 0;
					} );

				} else {
					this.articles = [];
				}
			}
		}
	}
} );

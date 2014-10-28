var Montage = require( "montage" ).Montage,
	RssArticle = require( "./../model/rss-article" ).RssArticle,
	RssSite = require( "./../model/rss-site" ).RssSite,
	RssService = require( "../service/rss-service" ).RssService,
	RSSCategory = require( "../model/rss-category" ).RSSCategory;

exports.RssController = Montage.specialize( {

	constructor: {
		value: function RssController() {

		}
	},

	categoryCache: {
		value: {}
	},

	rssUrl: {
		value: null
	},

	rssService: {
		value: null
	},

	_categoriesRssData: {
		value: null
	},

	_siteRssData: {
		value: null
	},

	_postRssData: {
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
			this.rssService.getSiteInfo().then( function( result ) {
				self._siteRssData = result;
				self.site = RssSite.create().init( self._siteRssData );
			} )

		}
	},

	initCategories: {
		value: function() {
			var self = this;
			this.rssService.getCategories().then( function( result ) {
				self._categoriesRssData = result;

				var categories = [RSSCategory.create().init( {name: 'Recent Posts', slug: 'all', count: '-1'} )];
				for ( var i = 0; i < self._categoriesRssData.length; i++ ) {

					categories.push(
						RSSCategory.create().init( self._categoriesRssData[i] )
					);
				}
				self.categories = categories;
			} )

		}
	},

	initPostData: {
		value: function() {

			var self = this;

			if ( this.categoryCache[this.category ] ) {
				self._articles = this.categoryCache[this.category ];
				return;
			}

			this.rssService.getPostData( this.category == "all" ? "" : this.category ).then( function( result ) {
				self._postRssData = result;
				var articles = [];
				for ( var i = 0; i < self._postRssData.length; i++ ) {

					articles.push(
						RssArticle.create().init( self._postRssData[i] )
					);
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
			//get wordpress site info
			this.initSiteInfo();

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

//			this.addOwnPropertyChangeListener( "rssUrl", this, "handleRssUrlChange", );

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

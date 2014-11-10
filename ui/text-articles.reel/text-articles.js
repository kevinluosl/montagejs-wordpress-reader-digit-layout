/**
 * @module ui/text-articles.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;

/**
 * @class TextArticles
 * @extends Component
 */
exports.TextArticles = Component.specialize( /** @lends TextArticles# */ {
	constructor: {
		value: function TextArticles() {
			this.super();
		}
	},
	rssController: {
		set: function( val ) {
			this._rssController = val;
		},

		get: function() {
			return this._rssController;
		}
	},

	templateDidLoad: {
		value: function( isFirstTime ) {
            if (this._rssController.filterTerm)
            {
                this.templateObjects.search.value=this._rssController.filterTerm;
                this.templateObjects.search.text=this._rssController.filterTerm;
            }
			if ( isFirstTime ) {
				this.defineBinding( "rssController.filterTerm", {"<-": "templateObjects.search.value"} );
			}
		}
	}
} );

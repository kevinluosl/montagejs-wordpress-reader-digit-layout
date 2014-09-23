/**
 @module "ui/rss-view.reel"
 @requires montage
 @requires montage/ui/component
 */
var Montage = require( "montage" ).Montage,
	Component = require( "montage/ui/component" ).Component,
	Promise = require( "montage/core/promise" ).Promise;

exports.RssView = Montage.create( Component, /** @lends module:"ui/rss-view.reel".RssView# */ {
	_article: {value: null},
	site: {value: null},

	article: {
		set: function( value ) {
			var self = this;

			if ( value ) {
				Promise.nextTick( function() {
					self._article = value;
					value.isRead = true;
					self.needsDraw = true;
					self.dispatchOwnPropertyChange( "article", value );
				} );
			}
		},
		get: function() {
			return this._article;
		}
	},

	enterDocument: {
		value: function( firstTime ) {

		}
	},

	templateDidLoad: {
		value: function() {

		}
	},

} );

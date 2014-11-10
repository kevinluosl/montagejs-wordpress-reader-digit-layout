/**
 @module "ui/rss-view.reel"
 @requires montage
 @requires montage/ui/component
 */
var Montage = require( "montage" ).Montage,
	Component = require( "montage/ui/component" ).Component,
	Promise = require( "montage/core/promise" ).Promise,
	SwipeComposer = require( "montage/composer/swipe-composer" ).SwipeComposer;

exports.RssView = Montage.create( Component, /** @lends module:"ui/rss-view.reel".RssView# */ {
	_article: {value: null},
	site: {value: null},
	article: {
		set: function( value ) {
			var self = this;

			if ( value ) {
				if ( !this.swipeComposer ) {
					this.swipeComposer = new SwipeComposer();
					var widget = this.templateObjects.substitution;
					this.addComposerForElement( this.swipeComposer, widget.element );
					this.swipeComposer.addEventListener( "swipe", this, false );
				}
				//Why doing this nextTick?
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

	handleSwipe: {
		value: function( event ) {
			if ( event.direction === 'RIGHT' ) {
				this.list.openPrev()
			} else if ( event.direction === 'LEFT' ) {
				this.list.openNext()
			}
		}
	},

	handleAction: {
		value: function( event ) {
			this.list.isView = false;
		}
	},

	enterDocument: {
		value: function( firstTime ) {

		}
	},

	templateDidLoad: {
		value: function() {

		}
	}

} );

/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize( /** @lends Main# */ {

    // "value": {"<-": "@rssController.articles.filter{!isRead}.length"}
    unreadLength:{
        value:null
    },
    ImgORText:{
        value:null
    },
	constructor: {
		value: function Main() {
			this.super();
		}
	},

	templateDidLoad: {
		value: function() {
        }
	}
} );

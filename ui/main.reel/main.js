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

	unreadLength: {
		set: function( val ) {
			this._unreadLength = val;
		},
		get: function() {
			return this._unreadLength;
		}
	},
	flowOrList: {
		set: function( val ) {
			this._flowOrList = val;
		},

		get: function() {
			return this._flowOrList;
		}
	},
	constructor: {
		value: function Main() {
			this.super();
			this._flowOrList = "FlowPart";
		}
	},
	handleAction: {
		value: function( event ) {
			if ( event.target.identifier == "closeButton" ) {
				this.dispatchEventNamed( "hidePost", true, true );
			}
			else if ( event.target.identifier == "listBtn" ) {
				this.flowOrList = "TextArt";
			}
			else {
				this.flowOrList = "FlowPart";
			}
		}
	},
	templateDidLoad: {
		value: function() {

		}

//            function() {
//            var listenobj={};
//            listenobj.handlelistBtnAction=function(event){
//                debugger
//            }
//            var listbtn=document.querySelector("#listBtn");
//            debugger
//            listbtn.addEventListener("action",listenobj,false);
//
//            var listenflow={};
//            listenflow.handleflowBtnAction=function(event){
//                debugger
//            }
//            var flowbtn=document.querySelector("#flowBtn");
//            flowbtn.addEventListener("action",listenflow,false);
//        }
	}
} );

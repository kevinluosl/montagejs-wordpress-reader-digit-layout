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
        set: function(val) {
            this._unreadLength=val;
        },
        get:function(){
            return this._unreadLength;
        }
    },
    ImgORText:{
         set: function( val ) {
            this._ImgORText = val;
        },

        get: function() {
            return this._ImgORText;
        }
    },
	constructor: {
		value: function Main() {
			this.super();
		}
	},
    handleAction:{
        value: function(event){
            if (event.target.identifier=="listBtn")
            {
                this.ImgORText="text";
            }
            else
            {
                this.ImgORText=null;
            }
        }
    },
	templateDidLoad: {
		value: null
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

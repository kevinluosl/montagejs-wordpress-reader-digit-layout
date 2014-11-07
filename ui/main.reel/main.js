/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    // "value": {"<-": "@rssController.articles.filter{!isRead}.length"}
    unreadLength: {
        set: function (val) {
            this._unreadLength = val;
        },
        get: function () {
            return this._unreadLength;
        }
    },
    imgORText: {
        set: function (val) {
            this._imgORText = val;
        },

        get: function () {
            return this._imgORText;
        }
    },
    constructor: {
        value: function Main() {
            this.super();
            this._imgORText = null;
        }
    },
    handleAction: {
        value: function (event) {
            if (event.target.identifier == "closeButton") {
                this.dispatchEventNamed("hidePost", true, true);
            }
            else if (event.target.identifier == "listBtn") {
                this.imgORText = "text";
            }
            else {
                this.imgORText = null;
            }
        }
    },
    templateDidLoad: {
        value: function () {

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
});

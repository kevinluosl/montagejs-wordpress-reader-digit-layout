/**
 * @module ui/show-article.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component ;

/**
 * @class ShowArticle
 * @extends Component
 */
exports.ShowArticle = Component.specialize(/** @lends ShowArticle# */ {
    constructor: {
        value: function ShowArticle() {
            this.super();
        }
    },
    article:
    {
        set:function(val) {
            this._article=val;
        },
        get:function() {
            return this._article;
        }
    },
    enterDocument:{
        value:null
//        value:function(){
//            this.mainController.mainInfo.title=this.article.title;
//            this.mainController.mainInfo.unReadCnt=this.unReadLen;
//        }
    },
    setMainInfo: {
       value:function(){
           if (this._article){
                this.article.isRead=true;
                this.mainController.mainInfo.title=this.article.title;
           }
         }
    },
    didGetValue:{
        value:null
    },
    didCreate:{
        value:function(){
            this.addPathChangeListener( "article", this, "setMainInfo" );
            this.defineBinding("mainController.mainInfo.unReadCnt", {
                "<-": "unReadLen"
            });
        }
    },
    handleAction:{
        value:function(event){
            this.dataController.clearSelection();
            this.mainController.mainInfo.title="WordPress Demo";
//            this.mainController.mainInfo.unReadCnt=0;
        }
    }
});

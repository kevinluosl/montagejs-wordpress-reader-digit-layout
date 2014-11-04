/**
 * @module ui/images-articles.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ImagesArticles
 * @extends Component
 */
exports.ImagesArticles = Component.specialize(/** @lends ImagesArticles# */ {

    rssController:{
        set:function(val){
            this._rssController = val;
//            this.defineBinding("rssController.categories",{"<-":"templateObjects.search.value"});

        },

        get:function(){
            return this._rssController;
        }
    },

    constructor: {
        value: function ImagesArticles() {
            this.super();
        }
    },
    selectedPost:{
        value:null
    },
    templateDidLoad:{
        value:function(isFirstTime){
            if (isFirstTime){
                this.defineBinding("rssController.filterTerm",{"<-":"templateObjects.search.value"});
            }
        }
    }
});

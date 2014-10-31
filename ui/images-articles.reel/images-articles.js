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
    constructor: {
        value: function ImagesArticles() {
            this.super();
        }
    },
    selectedPost:{
        value:null
    }
});

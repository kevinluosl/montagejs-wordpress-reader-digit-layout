/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    WordpressConnector = require("montage-wordpress/core/wordpress-connector").WordpressConnector;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    _wordpressConnector: {
        value: null
    },

    posts: {
        value: null
    },

    categories: {
        value: null
    },

    filterTerm: {
        value: null
    },

    category: {
        value: null
    },

    enterDocument: {
        value: function (firstTime) {
            var self = this;
            if (firstTime) {
                this._wordpressConnector.queryCategory().then(function (result) {
                    var categories = [
                        {name: 'Recent Posts', slug: '', count: '-1'}
                    ];
                    for (var i = 0; i < result.length; i++) {
                        categories.push(result[i]);
                    }
                    self.categories = categories;
                });
                this._wordpressConnector.querySiteInfo();
                this.addOwnPropertyChangeListener("filterTerm", this, false);
                this.addOwnPropertyChangeListener("category", this, false);
                this._wordpressConnector.addOwnPropertyChangeListener("posts", this, false);
                //this._wordpressConnector.createUser('kevinluo','123456','Kevin');
            }
        }
    },

    handlePropertyChange: {
        value: function (value, key) {
            var self = this;
            if (key === "posts" || key === "filterTerm") {
                if (this._wordpressConnector.posts) {
                    this._wordpressConnector.posts = this._wordpressConnector.posts.filter(function (post) {
                        return !self.filterTerm ||
                            post.title.toLowerCase()
                                .indexOf(self.filterTerm.toLowerCase()) >= 0;
                    });
                } else {
                    this._wordpressConnector.posts = [];
                }
            } else if (key === 'category') {
                this._wordpressConnector.queryPosts(this.category).then(function(result){
                    self.posts = result;
                });
            }
        }
    }

});

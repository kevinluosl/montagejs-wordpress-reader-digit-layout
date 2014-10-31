/**
 * @module ui/bar.reel
 * @requires montage/ui/component
 */

var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
 * @class Bar
 * @extends Component
 */
exports.ImageButton = AbstractButton.specialize( /** @lends Button# */ {

    hasTemplate: {value: true},

    src:{
        set:function(val){
//            debugger
            this._src = val;
            this.element.setAttribute("src",val);
        },

        get:function(){
            return this._src;
        }
    },

    constructor : {
        value: function Button() {
            this.super();
        }
    }
});

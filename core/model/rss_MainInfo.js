/**
 * Created by Jashon on 2014/11/4.
 */
var Montage = require( "montage" ).Montage;

exports.RssMainInfo = Montage.specialize({

    constructor: {
    value: function RssMainInfo() {
        this._title="WordPress Demo";
        this._unReadCnt=0;
    }
    },
    title: {
        set:function(val)
        {
            this._title=val;
        },
        get: function(){
            return this._title;
        }
    },
    unReadCnt:{
        set:function(val)
        {
            this._unReadCnt=val;
        },
        get: function(){
            return this._unReadCnt;
        }
    }
});

//
// Svg Injector
//
import $ from "jquery";
import SVGInjector from "svg-injector";

let SvgInjector = function(elem) {

    //
    // Variables
    //

    var $svg = $(elem);


    //
    // Methods
    //

    function init($this) {

        /*var options = {

        };*/

        SVGInjector($this)
    }


    //
    // Events
    //

    if ($svg.length) {
        init($svg);
    }

};


export default SvgInjector;
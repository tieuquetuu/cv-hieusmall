import $ from "jquery";

function NativeMargin(elem) {
    let $this = $(elem);
    $(window).on({
        'load resize': function() {
            let $target = $this.find($($this.data('negative-margin'))),
                height = $target.height();

            if ($(window).width() > 991) {
                $this.css({'margin-top': '-' + height + 'px'});
            }
            else {
                $this.css({'margin-top': '0'});
            }
        }
    })
}

export default NativeMargin;
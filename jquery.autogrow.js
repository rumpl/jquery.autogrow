/*global jQuery:true */

(function ($) {
    "use strict";

    $.fn.autogrow = function () {
        this.filter("textarea").each(function () {
            var $this = $(this),
                minHeight = $this.height(),
                shadow = $("<div></div>").css({
                    position: "absolute",
                    top: -10000,
                    left: -10000,
                    width: $(this).width(),
                    fontSize: $this.css("fontSize"),
                    fontFamily: $this.css("fontFamily"),
                    lineHeight: $this.css("lineHeight"),
                    resize: "none"
                }).addClass("shadow").appendTo(document.body),
                update = function () {
                    var t = this;
                    setTimeout(function () {
                        var val = t.value.replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/&/g, "&amp;")
                            .replace(/\n/g, "<br/>&nbsp;");

                        if ($.trim(val) === "") {
                            val = "a";
                        }

                        shadow.html(val);
                        $(t).css("height", Math.max(shadow[0].offsetHeight + 20, minHeight));
                    }, 0);
                };

            $this.change(update).keyup(update).keydown(update).focus(update);
            update.apply(this);
        });

        return this;
    };

}(jQuery));

/*global describe, it, $ */

describe("jquery.autogrow", function () {
    "use strict";

    it("should change the size of the textarea", function (done) {
        var autogrow = $("textarea").autogrow();
        var height = autogrow.height();

        autogrow.val("asdf\r\nasfasdfasdf\r\n\r\n\r\nasdf\r\n\r\n\r\na");

        setTimeout(function () {
            height.should.be.lessThan(autogrow.height());
            done();
        }, 0);
    });
});

(function ($) {
    $.fn.hyphenate = function (language, minLength) {
        var hypher = window['Hypher']['languages'][language];
        if (hypher) {
            minLength = minLength || 4;
            return this.each(function () {
                var i = 0, len = this.childNodes.length;
                for (; i < len; i += 1) {
                    if (this.childNodes[i].nodeType === 3) {
                        this.childNodes[i].nodeValue = hypher.hyphenateText(this.childNodes[i].nodeValue, minLength);
                    }
                }
            });
        }
    };
}(jQuery));
(function ($) {
    $.fn.hyphenate = function (language, minLength) {
        var hypher = window['Hypher'];

        if (hypher) {
            if (language === false) {
                return this.each(function () {
                    var len = this.childNodes.length;
                    for (var i = 0; i < len; i++) {
                        var node = this.childNodes[i];
                        if (node.nodeType === 3)
                            node.nodeValue = hypher.removeHyphenation(node.nodeValue);
                    }
                });
            } else if (hypher = hypher['languages'][language]) {
                minLength = minLength || 4;
                return this.each(function () {
                    var len = this.childNodes.length;
                    for (var i = 0; i < len; i++) {
                        var node = this.childNodes[i];
                        if (node.nodeType === 3)
                            node.nodeValue = hypher.hyphenateText(node.nodeValue, minLength);
                    }
                });
            }
        }

        return this;
    };
}(jQuery));
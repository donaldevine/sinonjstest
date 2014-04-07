var BackEndServiceCaller = (function () {

    // Public methods here
    return {
        doCallout: function (url, callback) {

            $.get(url, callback);

        }
    }

}())  
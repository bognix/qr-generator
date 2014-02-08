(function($) {
    // load jQuery if doesn't exist on page
    if (!$) {
        var done, script;
        done = false;
        script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                initQrGenerator();
            }
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        initQrGenerator();
    }

    function initQrGenerator() {
        (window.QrBookmarklet = function() {
            var location, styles, stylesStr, qrContainer, loaderIndicatorContainer, loaderIndicator, qrWrapper, qrCodeDiv, qrCodeDivImg;

            loaderIndicatorContainer = $('<div/>').attr('id', 'qr-loader-indicator');
            loaderIndicator = $('<p/>').text('Loading ...');
            qrContainer = $('<div/>').attr('id', 'qr-container');
            qrWrapper = $('<div/>').attr('id', 'qr-wrapper');
            qrCodeDiv = $('<div/>').attr('id', 'qr-code-div');
            qrCodeDivImg = $('<img/>').hide();
            qrCodeDivImg.appendTo(qrCodeDiv);
            qrCodeDiv.appendTo(qrContainer);
            loaderIndicator.appendTo(loaderIndicatorContainer);
            loaderIndicatorContainer.appendTo(qrContainer);

            styles = $('<style/>');
            stylesStr = '#qr-loader-indicator {' +
                'display:none;' +
                'position: fixed;' +
                'z-index: 1000000;' +
                'background: rgba(200,200,200, 0.5);' +
                'top: 0;' +
                'left: 0;' +
                'width: 100%;' +
                'height: 100%;' +
                '}';
            stylesStr += '#qr-loader-indicator p {' +
                'font: bold 20px Helvetica, sans-serif;' +
                'text-align: center;' +
                'position: absolute;' +
                'top: 50%;' +
                'left: 50%;' +
                '}'
//            styles = $('<style/>');
//            stylesStr = "#qr-loader-indicator {display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }";
//            stylesStr += "#qr-loader-indicator p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }";
//            stylesStr += "#qr-container iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }";
            styles.text(stylesStr);
            styles.appendTo(qrContainer);

            function getCurrentLocation () {
                var location;
                if (window.location) {
                    location = window.location.href;
                }
                return location || '';
            }
            location = getCurrentLocation();
            if (location) {
                $('body').append(qrContainer);
                $.ajax({
                    method: 'post',
                    url: 'http://localhost:8000/scanner/',
                    data: {url:location},
                    success: function (newData) {
                        loaderIndicatorContainer.fadeOut(750);
                        qrCodeDivImg.attr('src', 'data:image/png;base64,' + newData);
                        qrCodeDivImg.show();
                    }
                });
                qrWrapper.appendTo(qrContainer);
            }
        })();
    }
})(window.jQuery);
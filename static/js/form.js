(function () {
    var frm = $('#qr-form');
        frm.submit(function () {
            $.ajax({
                type: frm.attr('method'),
                url: frm.attr('action'),
                data: frm.serialize(),
                success: function (newData) {
                    $('#qr-img img').attr('src', 'data:image/png;base64,' + newData);
                }
            });
            return false;
        });
})()
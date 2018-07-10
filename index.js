$(function () {
    $("#confirm").click(function () {
        confirm("", "我喜欢你很久啦，你要不要做我女朋友啊~~~", function (isConfirm) {
            if (isConfirm) {
                love();
            } else {
                refuse();
            }
        }, {confirmButtonText: '确认', cancelButtonText: '关闭', width: 400, type: 'confession'});
    });


});


function refuse() {
    alert("", "你再考虑考虑啊，不要拒绝我嘛~~~", function () {
        confirm("", "我喜欢你很久啦，你要不要做我女朋友啊~~~", function (isConfirm) {
            if (isConfirm) {
                love();
            } else {
                refuse();
            }
        }, {confirmButtonText: '确认', cancelButtonText: '关闭', width: 400, type: 'confession'});
    }, {confirmButtonText: '确认', width: 400, type: 'confession'});
}


function love() {
    alert("", "爱你爱你~~~", function () {
    }, {confirmButtonText: '我也爱你啊~~~', width: 400, type: 'love'});
}
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

document.ontouchmove = function(e) {
    e.preventDefault();
}

function login() {
    if ($("#id").val() != '' && $("#pw").val() != '') {
        $.ajax({
            data:''
        })

    }
}
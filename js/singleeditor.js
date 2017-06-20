$(document).ready(function () {
    $("div.dynCreated").click(function (e) {
        console.log($(event.target).parent());
        var $this = $(event.target).parent(),
            curID = $this.attr('id'),
            cstype = $this.attr('data-cs-type');

    });
});
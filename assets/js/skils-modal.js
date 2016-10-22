$(".portfolioModal-img").click(function (e) {
    showContent($(this));
    $("#pf-modal-media").html(
        $("<img>").css("width", "100%").attr("src",
            $(this).data("image-source")
        )
    )
});

$(".portfolioModal-vid").click(function (e) {

});

function showContent(elem) {
    $("#pf-modal-txt").html(
        elem.children(".pf-modal-content").html()
    )
    $("#portfolioModal").openModal();
}
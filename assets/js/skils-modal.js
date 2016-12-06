$(".portfolioModal-img").click(function () {
    $("#pf-modal-media").html(
        $("<img>").css("width", "100%").attr("src",
            $(this).data("image-source")
        )
    );
    showContent($(this));

});

$(".portfolioModal-vid").click(function (e) {
    $("#pf-modal-media").html(
    '<iframe width="100%" src="' + $(this).data("vid") + '" style="min-height: 350px;" frameborder="0" allowfullscreen></iframe>'
    );
    showContent($(this));
});

function showContent(elem) {
    $("#pf-modal-txt").html(
        elem.children(".pf-modal-content").html()
    )
    $("#portfolioModal").openModal();

}
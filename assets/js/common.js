const scrollers = document.querySelectorAll(".scroller");


addAnimation();

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        const duplicates = [];

        for (let i = 0; i < 2; i++) {
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                duplicates.push(duplicatedItem);
            });
        }

        // Append all duplicates to scrollerInner
        duplicates.forEach((duplicatedItem) => {
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
// Img click Model
$(document).ready(function () {
    $(".img-div img").click(function () {
        var imgSrc = $(this).attr("src"); // Get clicked image source
        $("#modalImage").attr("src", imgSrc); // Set modal image source
        $("#imageModal").fadeIn(); // Show modal
    });

    $(".close").click(function () {
        $("#imageModal").fadeOut(); // Hide modal when close button is clicked
    });

    $(".model-img-container").click(function (e) {
        if (e.target === this) {
            $("#imageModal").fadeOut(); // Hide modal when close button is clicked
        }
    });

    $("#imageModal").click(function (e) {
        if (e.target === this) {
            $(this).fadeOut(); // Hide modal when clicking outside the image
        }
    });
});
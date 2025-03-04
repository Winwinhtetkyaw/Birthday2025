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
//Slider for reviews section

const findBlockByAlias = alias => {
    return $(".review__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias;
    });
}

$(".review__img").click(e => {
    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".review__photo-item");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});
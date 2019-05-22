var img = document.querySelector(".picture");
var box = document.querySelector(".box")
var test = box.offsetHeight - img.offsetHeight
console.log(img)


var left_p = 0;
var top_p = 0;

document.body.addEventListener("keydown", function (ev) {
    console.log(box.offsetWidth - img.offsetWidth + " " + left_p)
    // console.log(box.offsetWidth)

    // left arrow
    if (ev.which == 37) {

        left_p -= 10;
        if (left_p <= 10) {
            left_p = 0;
        }

    }

    // up arrow
    if (ev.which == 38) {

        top_p -= 10
        if (top_p <= 10) {
            top_p = 0;
        }


    }
    // right arrow
    if (ev.which == 39 && left_p < box.offsetWidth - img.offsetWidth - 4) {
        left_p += 10
    }
    // down arrow
    if (ev.which == 40 && top_p < box.offsetHeight - img.offsetHeight - img.clientHeight + 20) {

        top_p += 10;


    }
    img.style.top = top_p + "px"
    img.style.left = left_p + "px";

})







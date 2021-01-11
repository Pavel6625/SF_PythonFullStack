let img_num = 1

function click_prev() {
    img_num === 1 ? img_num = 10 : img_num -= 1

    document.getElementById("photo_container").
    setAttribute("src", `asset/${img_num}.jpg`)
}


function click_next() {
    img_num === 10 ? img_num = 1 : img_num += 1
    document.getElementById("photo_container").
             setAttribute("src", `asset/${img_num}.jpg`)
}

prev_img.addEventListener('click', click_prev);
next_img.addEventListener('click', click_next);
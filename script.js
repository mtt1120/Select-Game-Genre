const cols = document.querySelectorAll(".item");
const bodys = document.querySelectorAll(".body");
const btn = document.querySelector(".btn");
cols.forEach((col) => {
    col.addEventListener("mouseenter", () => {
        removeActive();
        col.classList.add("active");
        bgColorChange(col.dataset.num);
    })
    col.addEventListener("click", () => {
        removeSelected();
        col.children[3].style.display = "block";
        col.classList.add("selected");
        btn.style.display = "block";

    });
});

function removeActive() {
    cols.forEach((col) => {
        col.classList.remove("active");
    })
};
function removeSelected() {
    cols.forEach((col) => {
        col.classList.remove("selected");
        col.children[3].style.display = "none";
    })
    btn.style.display = "none";
};
function bgColorChange(num) {
    body = document.body;
    switch (num) {
        case "1":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #0e2a41ff)`;
            break;
        case "2":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #410e0eff)`;
            break;
        case "3":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #41380eff)`;
            break;
        case "4":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #5e200aff)`;
            break;
        case "5":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #280e41ff)`;
            break;
        case "6":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #000000ff)`;
            break;
        case "7":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #413c0eff)`;
            break;
        case "8":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #0e413aff)`;
            break;
        case "9":
            body.style.backgroundImage = `radial-gradient(#1d1d1dff 60%, #21410eff)`;
            break;
    };
}
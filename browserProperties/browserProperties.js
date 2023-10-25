function getScreenResolution() {    // выводит в консоль ширину и высоту экрана при изменении
    console.log("Высота: ", window.innerHeight, "  Ширина: ", window.innerWidth)
}
window.addEventListener("resize", getScreenResolution);


window.addEventListener("beforeunload", (event) => {  // требует подтверждение о закрытии страницы
    event.preventDefault();
    event.returnValue = "Действительно хотите уйти с данной страницы?";
})

const back = document.querySelector(".back");       // переход по истории вперед и назад
back.addEventListener("click", () => window.history.back());

const forward = document.querySelector(".forward");
forward.addEventListener("click", () => history.forward());


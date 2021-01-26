//URL получения данных
const URL = " https://picsum.photos/v2/list?";

//ссылки на элементы HTML
const btn_node = document.querySelector(".js_btn_load");
const res_node = document.querySelector(".js_result");

//функция вывода результата в блок
function displayResult(page, limit) {
    //проверка ошибок ввода
    const error1 = page < 1 || page > 10 || isNaN(page);
    const error2 = limit < 1 || limit > 10 || isNaN(limit);

    //оба поля некорректны
    if (error1 && error2) {
        document.querySelector(".js_result").textContent =
            "Номер страницы и лимит вне диапазона от 1 до 10";
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
        console.log("Номер страницы и лимит вне диапазона от 1 до 10");

        //поле номера страницы некорректно
    } else if (error1) {
        document.querySelector(".js_result").textContent =
            "Номер страницы вне диапазона от 1 до 10";
        alert("Номер страницы вне диапазона от 1 до 10");
        console.log("Номер страницы вне диапазона от 1 до 10");

        //поле значения лимита некорректно
    } else if (error2) {
        document.querySelector(".js_result").textContent =
            "Лимит вне диапазона от 1 до 10";
        alert("Лимит вне диапазона от 1 до 10");
        console.log("Лимит вне диапазона от 1 до 10");

        //ошибок ввода нет, отправляем запрос
    } else {
        fetch(`${URL}page=${page}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let result = "";
                data.forEach((item) => {
                    result += `
                <div class="item">
                    <img class="pic" alt="Picture" src="${item.download_url}" />
                    <p class="info">${item.author}</p>
                </div>
                `;
                    res_node.innerHTML = result;
                });

                //запись последних параметров в кэш
                localStorage.setItem("page", page);
                localStorage.setItem("limit", limit);
            })
            .catch(() => {
                console.log("Что-то пошло не так");
            });
    }
}

//Обработчик события нажатия кнопки запроса
btn_node.addEventListener("click", () => {
    //получение значений полей ввода
    const page = parseInt(document.querySelector(".js_page").value);
    const limit = parseInt(document.querySelector(".js_limit").value);

    displayResult(page, limit);
});

//Обработчик перезагрузки страницы
window.addEventListener("load", () => {
    //получение значений полей ввода
    const page = localStorage.getItem("page");
    const limit = localStorage.getItem("limit");

    //загрузка последнего запроса при наличии
    if (page != null && limit != null) {
        displayResult(page, limit);
    }
});

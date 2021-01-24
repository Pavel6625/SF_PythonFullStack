const URL = "https://picsum.photos";
//кнопка отправки запроса
const btn_node = document.querySelector(".js_btn_load");
//блок для вывода результата
const res_node = document.querySelector(".js_result");

btn_node.addEventListener("click", () => {
  console.clear();
  console.log("Начало запроса");
  let pic_height = parseInt(document.querySelector(".js_pic_height").value);
  let pic_width = parseInt(document.querySelector(".js_pic_width").value);

  if (pic_height < 100 || pic_height > 300) {
    document.querySelector(".js_result").textContent = 'Значение высоты должно быть от 100 до 300';
    console.log("Запрос не выполнялся");

  } else if (pic_width < 100 || pic_width > 300) {
    document.querySelector(".js_result").textContent = 'Значение ширины должно быть от 100 до 300';
    console.log("Запрос не выполнялся");

  } else if (isNaN(pic_width) || isNaN(pic_height)) {
    document.querySelector(".js_result").textContent = 'Не задано одно из значений';
    console.log("Не задано одно из значений");

  } else {
    console.log(`Получение картинки размером ${pic_height}x${pic_width}`)
    const req_url = `${URL}\${pic_width}\${pic_height}`;
    fetch(req_url)
    .then((response) => {
      console.log("Ответ от сервера получен", response.url);
      result = `
    <div class="item">
      <img class="pic" alt="Picture" src="${response.url}" />
      <p class="info">Картинка размером ${pic_height}x${pic_width}</p>
    </div>
    `;
      res_node.innerHTML = result;
    })
    .catch(() => {console.log('Ошибка запроса')});
   }
});

  
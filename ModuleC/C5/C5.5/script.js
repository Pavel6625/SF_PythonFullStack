  //URL получения данных
const URL = " https://picsum.photos/v2/list?";
  //кнопка отправки запроса
const btn_node = document.querySelector(".js_btn_load");  
  //блок для вывода результата
const res_node = document.querySelector(".js_result");    
  //получение результата последнего запроса из localStorage
const last_json = localStorage.getItem("last_json");    

//фнукция для редактирования кода HTML
function editHTML(json) {
  let result = "";
  json.forEach((item) => {
    result += `
    <div class="item">
      <img class="pic" alt="Picture" src="${item.download_url}" />
      <p class="info">${item.author}</p>
     </div>
    `;
    res_node.innerHTML = result;
  });
};

if (last_json) { editHTML(json) };

  //Обработчик события нажатия кнопки запроса
btn_node.addEventListener("click", () => {  
  console.clear();
  console.log("Начало запроса");
    //значение номера страницы
  let page_num = parseInt(document.querySelector(".js_page").value);      
    //значение лимита
  let limit_value = parseInt(document.querySelector(".js_limit").value);  
  
    //ошибка ввода номера страницы
  const error1 = (page_num < 1 || page_num > 10 || isNaN(page_num));          
    //ошибка ввода значения лимита
  const error2 = (limit_value < 1 || limit_value > 10 || isNaN(limit_value));
  
  //Обработка ошибок ввода параметров
  //Обработка ошибки обоих полей
  if (error1 && error2) { 
    document.querySelector(".js_result").textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    alert("Номер страницы и лимит вне диапазона от 1 до 10");
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
    
    //Обработка ошибки поля номера страницы
  } else if (error1) {    
    document.querySelector(".js_result").textContent = 'Номер страницы вне диапазона от 1 до 10';
    alert("Номер страницы вне диапазона от 1 до 10");
    console.log("Номер страницы вне диапазона от 1 до 10");   
    
    //Обработка ошибки поля значения лимита
  } else if (error2) {    
    document.querySelector(".js_result").textContent = 'Лимит вне диапазона от 1 до 10';
    alert("Лимит вне диапазона от 1 до 10");
    console.log("Лимит вне диапазона от 1 до 10");
    
    //Ошибок ввода нет, отправляем запрос
  } else {
    console.log('Получение картинок')
    const req_url = `${URL}page=${page_num}&limit=${limit_value}`;
    fetch(req_url)
    .then((response) => {
      console.log("Ответ сервера: ", response.status);
      return response.json()
    })
    .then((json) => {
      console.log(json);
      editHTML(json);
      localStorage.setItem('last_json',json);
      })
    .catch(() => {console.log('Что-то пошло не так')});
   }
});
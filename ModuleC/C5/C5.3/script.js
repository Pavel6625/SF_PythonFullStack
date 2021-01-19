const URL = 'https://picsum.photos/v2/list?limit=';

//кнопка отправки запроса
const btn_node = document.querySelector('.js_btn_load');

//блок для вывода результата
const res_node = document.querySelector('.js_result');

//функция обработки запроса
function makeGetRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log(`Статус: ${xhr.status}`);  
    } else {
      if (callback) {
        const res = JSON.parse(xhr.response);
        callback(res);
      }
    }
  };

  xhr.onerror = function() {
    console.log(`Ошибка запроса: ${xhr.status}`);
  };
  
  xhr.send();
}

//функция вывода результата в блок
function displayResult(json_data) {
  console.log(json_data);
  let result = '';
  json_data.forEach(item => {
    result +=  `
    <div class="item">
      <img class="pic" alt="Picture" src="${item.download_url}" />
      <p class="info">${item.author}</p>
    </div>
    `;
   res_node.innerHTML = result
  })
}

btn_node.addEventListener('click', () => {
  console.clear();
  console.log('Начало запроса');
  let pic_qnty = parseInt(document.querySelector('.js_pic_qnty').value);
  if (pic_qnty>=1 && pic_qnty<=10) {
    makeGetRequest(URL+pic_qnty, displayResult);
    console.log('Запрос выполнен');
  } else {
    document.querySelector('.js_result').textContent = `Число ${pic_qnty} вне диапазона от 1 до 10`;
    console.log('Запрос не выполнялся');
  }
  document.querySelector('.js_pic_qnty').value = '';
})


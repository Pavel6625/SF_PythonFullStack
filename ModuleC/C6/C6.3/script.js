const chat_output = document.querySelector('.messagelist');
const message_text = document.querySelector('.messagetext');
const btn_send = document.querySelector('.send');
const btn_geo = document.querySelector('.geo');

const websocket = new WebSocket('wss://echo.websocket.org/');

function addNewMessage(message,side) {
  let msg = document.createElement('span');
  msg.classList.add('msg');
  msg.classList.add(side);
  msg.innerHTML = message;
  chat_output.append(msg);
};

btn_send.addEventListener('click', () => {
  const messagetext = message_text.value;
  if (message_text.value) {
    websocket.send(messagetext);
    addNewMessage(messagetext,'user');
    message_text.value = '';
  } else {
    alert('Нельзя отправить пустое сообщение');
  }
  
});

btn_geo.addEventListener('click', () => {
  if (!navigator.geolocation) {
      alert('Местоположение недоступно');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        websocket.send('Геолокация');
        const messagetext = `<a href="https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}">Геопозиция</a>`;
        addNewMessage(messagetext,'user');
      },() => {
        alert('Местоположение недоступно');
      });
    }  
});
  


websocket.onmessage = function(evt) {
  if (evt.data != 'Геолокация') {
    addNewMessage(evt.data,'serv');
  }
}


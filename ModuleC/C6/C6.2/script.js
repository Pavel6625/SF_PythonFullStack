const btn = document.querySelector(".js_btn");

btn.addEventListener('click', () => {
  alert(`Размер экрана ${screen.width}x${screen.height}`)
});
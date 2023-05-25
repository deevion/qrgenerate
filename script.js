const button = document.querySelector('button'),
  img = document.querySelector('img'),
  input = document.querySelector('input'),
  api_1 = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

button.addEventListener('click', () => {
  img.src = `${api_1}${input.value}`
})

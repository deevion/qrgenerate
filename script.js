const button = document.getElementById('generate')
const download = document.getElementById('download')
const img = document.querySelector('img')
const input = document.querySelector('input')
const api_1 = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

button.addEventListener('click', () => {
  img.src = `${api_1}${input.value}`
})

download.addEventListener('click', async () => {
  const response = await fetch(img.src)
  const blod = await response.blob()
  const downloadLink = document.createElement('a')
  downloadLink.href = URL.createObjectURL(blod)
  downloadLink.download = 'qrcode.jpg'
  downloadLink.click()
})

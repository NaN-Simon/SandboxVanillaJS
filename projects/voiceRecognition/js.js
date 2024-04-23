const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const backInfo = document.querySelector('.back-info')

const SpeechRecognition = webkitSpeechRecognition
const rec = new SpeechRecognition()
rec.lang = "ru-RU"

btn.addEventListener('click', () => {
  rec.start()
  btn.classList.add("rec")
})

rec.onresult = function (event) {
  const text = event.results[0][0].transcript;
  console.log(event);
  btn.classList.remove("rec")
  result.textContent = text
  // backInfo.textContent = JSON.stringify(event, null, 2)
}
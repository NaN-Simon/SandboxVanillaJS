const btnRecord = document.querySelector('.btn-record')
const textarea = document.querySelector('#textarea')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition()
rec.lang = "ru-RU"

btnRecord.addEventListener('click', () => {
  rec.start()
  btnRecord.classList.add("rec")
})

rec.onresult = function (event) {
  const text = event.results[0][0].transcript;
  console.log(event);
  btnRecord.classList.remove("rec")
  textarea.value = text
}


const btnSpeech = document.querySelector('.btn-speech')
console.log(textarea.textContent);

let clickCount = 0; // Initialize a counter

btnSpeech.addEventListener('click', () => {
  clickCount++; // Increment the counter on each click
  
  if (clickCount === 2) { // Check if it's the second click
    speechSynthesis.cancel(); // Stop the speech synthesis
    console.log('Stopped after second click');
    clickCount = 0; // Reset the counter for future uses
  } else {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    speechSynthesis.speak(utterance);
    console.log('Speaking...');
  }
});
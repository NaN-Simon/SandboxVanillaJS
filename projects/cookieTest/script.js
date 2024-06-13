const setCookieBtn = document.getElementById("setCookieBtn");
const getCookieBtn = document.getElementById("getCookieBtn");
const cookieValueElement = document.getElementById("cookieValue");

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    const cookie = name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
    document.cookie = cookie;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    console.log(document.cookie);
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

// Обработчик события для кнопки "Установить Cookie"
setCookieBtn.addEventListener("click", () => {
    setCookie("myCookie", "Привет, мир!", 7); // Устанавливаем Cookie "myCookie" со значением "Привет, мир!" на 7 дней
    cookieValueElement.textContent = "Cookie установлен!";
});

// Обработчик события для кнопки "Получить Cookie"
getCookieBtn.addEventListener("click", () => {
    const cookieValue = getCookie("myCookie");
    cookieValueElement.textContent = cookieValue ? `Значение Cookie: ${cookieValue}` : "Cookie не найден!";
  });
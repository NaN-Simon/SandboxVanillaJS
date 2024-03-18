(async () => {
  const items = await document.querySelector('.items');
  const COLORS = [
    'rgb(247, 68, 68)',
    '(0, 237, 0)',
    'rgb(181,198,238)',
    'rgb(94,120,244)',
    'rgb(214, 253, 39)',
    'rgb(255, 204, 0)',
    'rgb(72,69,116)',
    'rgb(0, 0, 0)',
  ];
  const FONT_COLOR = [
    'rgb(0, 0, 0)',
    'rgb(255, 255, 255)',
    'blue'
  ]
  const SYMBOL = ['A','B','C','D','E','F','G','a',
                  'b','c','d','e','f','0','1','2',
                  '3','4','5','6','7','8','?'] //23

    //создаем рандом из colors.length цетов
  async function randArrayColor(arrayColors) {
    const x = await Math.ceil(Math.random() * arrayColors.length);
    let res = await x;
    return await arrayColors[x-1];
  }
  //создаем поочередную смену символов из массива
  function changeInner(arraySymb,speed) {
    const item = document.querySelectorAll('.item');

    item.forEach((symb) => {
      let numbSymb = ((Math.ceil(Math.random()*arraySymb.length))-1)
      let timer = setInterval(async function () {
        symb.innerHTML = await arraySymb[numbSymb];
        if (arraySymb[numbSymb] == arraySymb[arraySymb.length - 1]) {
          numbSymb = 0;
        } else {
          arraySymb[numbSymb++];
        }
      }, speed);
    });
  }

  //создаем rgb рандом
  async function randRGB() {
    const x = await Math.ceil(Math.random() * 255);
    const y = await Math.ceil(Math.random() * 255);
    const z = await Math.ceil(Math.random() * 255);
    let res = await `rgb(${x}, ${y}, ${z})`;
    return await res;
  }

  //заполняем поле [items] символами
  const myPromise = new Promise(async function (resolve, reject) {
    for (let i = 0; i < 400; i++) {
      const newItem = await document.createElement('li');
      newItem.classList.add('item');
      newItem.innerHTML = 'A';
      items.append(newItem);
    }
    resolve();
  });

  myPromise.then(async (item) => {
    changeColor(randArrayColor,1000);
    changeInner(SYMBOL,500);
  });


  //назначаем каждому классу рандомный цвет
  async function changeColor(typeOfFunc,speed) {
    const item = await document.querySelectorAll('.item');
    setInterval(() => {
      item.forEach(async (el) => {
        el.style.background = await typeOfFunc(COLORS);
        el.style.color = await typeOfFunc(FONT_COLOR);
      });
    }, speed);
  }
})();

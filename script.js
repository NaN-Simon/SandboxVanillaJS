class Card {
  constructor(itemName, itemHref, buttonName, itemDate) {
    this.container = document.querySelector('.container')

    this.setup(itemName, itemHref, buttonName, itemDate)
  }

  setup(itemName, itemHref, buttonName, itemDate) {
    console.log(itemName);
    const item = document.createElement('div');
    item.classList.add('item');

    const wrapper = document.createElement('div')
    wrapper.classList.add('.item__wrapper')

    const p = document.createElement('p');
    p.classList.add('item__name');
    p.innerHTML = itemName;
    wrapper.append(p)

    const p2 = document.createElement('p');
    p2.classList.add('item__date');
    p2.innerHTML = itemDate;
    wrapper.append(p2)

    item.append(wrapper)

    const a = document.createElement('a');
    a.setAttribute('href', itemHref);
    const button = document.createElement('button');
    button.classList.add('item__button');
    button.innerHTML = buttonName;
    a.append(button)

    item.append(a)

    this.container.append(item)
  }

}

const block1 = new Card('Layout-portfolio', './projects/portfolio/index.html', 'Deploy', 'January 2022')
const block2 = new Card('Reverse-int', './projects/reverse-int/src/index.js', 'Code', 'January 2022')
const block3 = new Card('Audio-player', './projects/audio-player/index.html', 'Deploy', 'January 2022')
const block4 = new Card('CV-HTML', './projects/cv-html/index.html', 'Deploy', 'January 2022')
const block5 = new Card('Human-readable-number', './projects/human-readable-number/src/index.js', 'Code', 'January 2022')
const block6 = new Card('Morse-decoder', './projects/morse-decoder/src/index.js', 'Code', 'February 2022')
const block7 = new Card('Towel-sort', './projects/towel-sort/src/index.js', 'Code', 'February 2022')
const block8 = new Card('Image-galery', './projects/image-galery/index.html', 'Deploy', 'March 2022')
const block9 = new Card('Tic-tac-toe', './projects/tic-tac-toe/index.html', 'Deploy', 'March 2022')
const block10 = new Card('Shelter', './projects/shelter/pages/main/index.html', 'Deploy', 'March 2022')
const block11 = new Card('CssMemSlider', './projects/cssMemSlider/index.html', 'Deploy', 'May 2022')
const block12 = new Card('Virtual-keyboard', './projects/virtual-keyboard/index.html', 'Deploy', 'May 2022')
const block13 = new Card('Core-js-101(3 of 8)', './projects/core-js-101/src/', 'Code', 'May 2022')
const block14 = new Card('Basic-js(13 of 25)', './projects/basic-js/src/', 'Code', 'May 2022')
const block15 = new Card('Visualizer-mic-edition', './projects/visualizer-mic-edition/index.html', 'Deploy', 'September 2022')
const block16 = new Card('Visualizer', './projects/visualizer/index.html', 'Deploy', 'September 2022')
const block17 = new Card('Sandbox-painter', './projects/sandbox-painter/index.html', 'Deploy', 'Jule 2022')
const block18 = new Card('Linker', './projects/linker/dist/index.html', 'Deploy', 'Jule 2022')
const block19 = new Card('portrait', './projects/portrait/index.html', 'Deploy', 'October 2022')
const block20 = new Card('file-scan', './projects/file-scan/index.js', 'Code', 'October 2022')
const block21 = new Card('English-cards', './projects/eng-cards/dist/index.html', 'Deploy', 'November 2022')
const block22 = new Card('Game Life', './projects/gameLife/index.html', 'Deploy', 'April 2023')
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
const block2 = new Card('Audio-player', './projects/audio-player/index.html', 'Deploy', 'January 2022')
const block3 = new Card('CV-HTML', './projects/cv-html/index.html', 'Deploy', 'January 2022')
const block4 = new Card('Image-galery', './projects/image-galery/index.html', 'Deploy', 'March 2022')
const block5 = new Card('Tic-tac-toe', './projects/tic-tac-toe/index.html', 'Deploy', 'March 2022')
const block6 = new Card('Shelter', './projects/shelter/pages/main/index.html', 'Deploy', 'March 2022')
const block7 = new Card('CssMemSlider', './projects/cssMemSlider/index.html', 'Deploy', 'May 2022')
const block8 = new Card('virtualKeyboard', './projects/virtualKeyboard/index.html', 'Deploy', 'May 2022')
const block9 = new Card('visualizer Microphone Edition', './projects/visualizerMicEdition/index.html', 'Deploy', 'September 2022')
const block10 = new Card('audioVisualizer', './projects/audioVisualizer/index.html', 'Deploy', 'September 2022')
const block11 = new Card('sandboxPainter', './projects/sandboxPainter/index.html', 'Deploy', 'Jule 2022')
const block12 = new Card('Linker', './projects/linker/dist/index.html', 'Deploy', 'Jule 2022')
const block13 = new Card('portrait', './projects/portrait/index.html', 'Deploy', 'October 2022')
const block14 = new Card('file-scan', './projects/file-scan/index.js', 'Code', 'October 2022')
const block15 = new Card('English-cards', './projects/eng-cards/dist/index.html', 'Deploy', 'November 2022')
const block16 = new Card('Game Life', './projects/gameLife/index.html', 'Deploy', 'April 2023')
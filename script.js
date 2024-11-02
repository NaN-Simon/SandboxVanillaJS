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

new Card('Layout-portfolio', './projects/portfolio/index.html', 'Deploy', 'January 2022')
new Card('Audio Player', './projects/audioPlayer/index.html', 'Deploy', 'January 2022')
new Card('CV-HTML', './projects/cv-html/index.html', 'Deploy', 'January 2022')
new Card('Image Gallery', './projects/imageGallery/index.html', 'Deploy', 'March 2022')
new Card('Tic-tac-toe', './projects/ticTacToe/index.html', 'Deploy', 'March 2022')
new Card('Shelter', './projects/shelter/pages/main/index.html', 'Deploy', 'March 2022')
new Card('CssMemSlider', './projects/cssMemSlider/index.html', 'Deploy', 'May 2022')
new Card('virtualKeyboard', './projects/virtualKeyboard/index.html', 'Deploy', 'May 2022')
new Card('visualizer Microphone Edition', './projects/visualizerMicEdition/index.html', 'Deploy', 'September 2022')
new Card('audioVisualizer', './projects/audioVisualizer/index.html', 'Deploy', 'September 2022')
new Card('sandboxPainter', './projects/sandboxPainter/index.html', 'Deploy', 'July 2022')
new Card('Linker', './projects/linker/dist/index.html', 'Deploy', 'July 2022')
new Card('Portrait', './projects/portrait/index.html', 'Deploy', 'October 2022')
new Card('Game Life', './projects/gameLife/index.html', 'Deploy', 'April 2023')
new Card('Rotated Box', './projects/rotatedBox/box.html', 'Deploy', 'October 2023')
new Card('LocalStorage', './projects/localStorage/index.html', 'Deploy', 'March 2024')
new Card('voiceRecognition', './projects/voiceRecognition', 'Deploy', 'March 2024')
new Card('modalCSS', './projects/modalCSS', 'Deploy', 'April 2024')
new Card('Audio Visualizer Player', './projects/audioVisualizerPlayer/index.html', 'Deploy', 'April 2024')
new Card('Cookie', './projects/cookieTest/index.html', 'Deploy', 'June 2024')
new Card('Animation', './projects/animation/index.html', 'Deploy', 'June 2024')
new Card('Glitch Photo', './projects/glitchPhoto/index.html', 'Deploy', 'October 2024')
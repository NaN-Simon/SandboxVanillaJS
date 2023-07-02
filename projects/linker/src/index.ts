import './styles/styles.scss';

/* Code */

class Linker {
  container: HTMLElement;
  button: HTMLElement;
  inputArea: HTMLInputElement;
  outputArea: HTMLInputElement;

  constructor() {
    this.container = document.body;
    this.inputArea = document.querySelector('[name="in"]') as HTMLInputElement;
    this.outputArea = document.querySelector(
      '[name="out"]'
    ) as HTMLInputElement;
    this.button = document.querySelector(
      '[button="lets"]'
    ) as HTMLButtonElement;
  }

  translate() {
    const mySet = new Set();
    const inputValueArray = this.inputArea.value.split('\n');
    inputValueArray.forEach((item) => mySet.add(item));
    const arrayOfString: string[] = Array.from(mySet) as string[];
    const sortedArray = arrayOfString.sort((one, two) => (one < two ? -1 : 1));
    const linkerResult: string[] = [];
    sortedArray.forEach((el) => {
      if (el !== "") { linkerResult.push(`<p><a class="link" href="${el}">${el}</a></p>`) }
    });
    this.outputArea.value = linkerResult.join('\n');
  }

  render() {
    this.button.addEventListener('click', () => {
      this.translate();
    });
  }
}

const linker = new Linker();
linker.render();

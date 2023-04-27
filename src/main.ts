import './styles/style.css';
import FullWord from './model/FullWord';
import { WordInterface } from './interfaces/APIInterface';

const fullWord = FullWord.instance;

function updateDOM(wordData: WordInterface | null) {
  const wordElem = document.querySelector('#word') as HTMLDivElement;
  const definitionElem = document.querySelector('#definition');
  console.log(wordData);

  if (wordData) {
    wordData.map((word) => {
      return (wordElem.textContent = word?.word);
    });
  }

  // if (wordElem && definitionElem) {
  //   wordElem.textContent = wordData?.word || 'Word not found';
  //   definitionElem.textContent =
  //     wordData?.meanings?.[0]?.definitions?.[0]?.definition ||
  //     'Definition not found';
  // }
}

async function updateWord() {
  await fullWord.fetchWord('many');
  updateDOM(fullWord.word);
}

updateWord();

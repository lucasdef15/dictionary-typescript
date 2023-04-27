import axios from 'axios';
import { WordInterface } from '../interfaces/APIInterface';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

type WordType = WordInterface | null;

interface Word {
  word: WordType;
  fecthWord(selectedWord: string): void;
}

export default class FullWord implements Word {
  static instance: FullWord = new FullWord();

  private constructor(private _word: WordType = null) {}

  get word(): WordType {
    return this._word;
  }

  async fetchWord(selectedWord: string): Promise<void> {
    try {
      const response = await axios.get(`${API_URL}${selectedWord}`);
      this._word = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

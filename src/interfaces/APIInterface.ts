export interface WordInterface {
  license: License;
  meanings: Meaning[];
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
}

export interface Definition {
  antonyms: any[];
  definition: string;
  example?: string;
  synonyms: any[];
}

export interface Phonetic {
  audio: string;
  license?: License;
  sourceUrl?: string;
  text?: string;
}

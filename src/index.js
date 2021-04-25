// Copyright 2021 Ju An Kang

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { nouns, adjectives, firstAdjSuffixes } from './assets/words';

const getRandElem = (arr) => arr[Math.floor(Math.random() * arr.length)];

class PhraseGen {
  constructor({
    delimiter = '-',
    customNouns,
    customAdjectives,
    adjSuffix,
  } = {}) {
    this.adjSuffix = adjSuffix;
    this.nouns = customNouns || nouns;
    this.adjectives = customAdjectives || adjectives;
    this.delimiter = delimiter;

    Object.preventExtensions(this);
  }

  /**
   * Generates a random word string from the word pools
   *
   * @return {string} - [adj]-[adj]-[noun]
   * @memberof PhraseGen
   */
  generatePhrase({ array = false } = {}) {
    const phraseBlocks = [
      getRandElem(this.adjectives)
        + (this.adjSuffix || getRandElem(firstAdjSuffixes)),
      `${getRandElem(this.adjectives)}한`,
      getRandElem(this.nouns),
    ];

    return array ? phraseBlocks : phraseBlocks.join(this.delimiter);
  }

  /**
   * Returns a random noun existing in the noun word pool
   *
   * @return {string} - noun
   * @memberof PhraseGen
   */
  getNoun() {
    return getRandElem(this.nouns);
  }

  /**
   * Returns an adjective that defaults in the form of [adj]하다
   * suffix of the adjective can be supplied for customization
   *
   * @param {[suffix]} [{ suffix = "하다" } = {}]
   * @return {string}
   * @memberof PhraseGen
   */
  getAdjective(suffix = '하다') {
    return getRandElem(this.adjectives) + suffix;
  }

  /**
   * Conveniently update properties with an object
   *
   * @param {Object} props - properties to update: [adjSuffix, delimiter, adjectives, nouns]
   * @memberof PhraseGen
   */
  set(props) {
    Object.entries(props).forEach(([k, v]) => { this[k] = v; });
  }
}

module.exports = PhraseGen;

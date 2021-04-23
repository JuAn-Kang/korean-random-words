<h1 align="center">korean-random-words 🇰🇷-🎲-✏️</h1>
<p>
  <a href="https://www.npmjs.com/package/korean-random-words" target="_blank">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/juan-kang/korean-random-words?color=FC6264&style=for-the-badge">
  </a>
  <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2021?style=for-the-badge">
  <a href="https://github.com/JuAn-Kang/korean-random-words/blob/master/LICENSE" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/github/license/JuAn-Kang/korean-random-words?color=lightgrey&style=for-the-badge" />
  </a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/juan-kang/korean-random-words?color=yellow&style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/static/v1?label=Made%20with&message=Coffee&color=6D4A37&style=for-the-badge">
</p>


> TLDR: I needed a quick not-so-boring random generator with several million combinations.

- 🌏 View README in... [![korean-badge](https://img.shields.io/static/v1?label=%EA%B0%80&message=%ED%95%9C%EA%B5%AD%EC%96%B4&color=eeeeee&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words/blob/main/README/README_KR.md) | [![korean-badge](https://img.shields.io/static/v1?label=A&message=English&color=333333&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words#readme)



## 📃 Overview

`korean-random-words` generates a 3-word phrase in the general form of `[adjective][suffix]-[adjective]한-[noun]` , such as `뾰족하고-용감한-선인장`. Using default properties, the randomly generated phrase with the form above will be one of `256^3 * 5 = 83,886,080` possible phrases, with (currently) 256 nouns, 256 adjectives, and 5 variations of the suffix for the first adjective.

As a disclaimer, the package is _not_ designed with cryptographycally secure randomness in mind.

-----

## ✨ Demo

Coming Soon

-----

## 💾 Install

```sh
npm install korean-random-words # npm
yarn add korean-random-words # yarn
```

-----

## 🧠 Usage

```js
// ES6
import PhraseGen from 'korean-random-words';
const phraseGen = new PhraseGen();

// Node
var PhraseGen = require('korean-random-words');
var phraseGen = new PhraseGen();

phraseGen.generatePhrase(); // '유식하고-말랑한-해삼'

```

### constructor

The constructor takes an object with 4 optional properties:

- **adjSuffix**: string - customizable suffix for the first adjective.
  - default: `'하고' | '하지만' | '한데' | '해도' | '해서'` and is randomized upon each call.
  - example: `{ adjSuffix: '헸어도' } //would create '무심했어도-착한-오소리'` 
- **delimiter**: string - overrides default delimiter to the provided string(conventionally a character)
  - default: '-'
  - example: `{ delimiter: '__' } // would create '진지하고__굉장한__감자'`
- **customNouns**: [string] - custom set of nouns to randomize the phrase from
  - default: a word bank of common nouns
  - example: `{ customNouns: ['키보드','마우스','웹캠','모니터'] }`
- **customAdjectives**: [string] - custom set of adjectives to randomize the phrase from
  - default: a word bank of common adjectives
  - *The form of adjectives should be words that are compatible with the form of `-하다` without the suffix, in order to keep the phrase gramatically accurate, as shown in the example below:
  - example: `{ customNouns: ['당당','소심','건들건들','위대'] }`

Below are some examples of constructing the phrase generator: 

```js
import PhraseGen from 'korean-random-words';

// default constructor
const phraseGen = new PhraseGen();
phraseGen.generatePhrase(); // '유식하고-말랑한-해삼'

// partial object
const phraseGen = new PhraseGen({
  delimiter: '__',
  adjSuffix: '했어도'
});
phraseGen.generatePhrase(); // '유식했어도__말랑한__해삼'

// pass in configuration
const phraseGenConfig = {
  customNouns: ['키보드','마우스','웹캠','모니터'],
  customAdjectives: ['당당','소심','건들건들','위대'],
  delimiter: '__',
  adjSuffix: '했어도'
};
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // '소심했어도__위대한__모니터'

```

### generatePhrase: string

- returns a generated phrase with the supplied configurations

```js
const phraseGenConfig = { /* optional configs */ }
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // '소심했어도__위대한__모니터'
```

### getNoun: string

- returns a random noun, either from the default noun bank or the supplied list of custom nouns

```js
const phraseGen = new PhraseGen();
phraseGen.getNoun(); // 고슴도치 | 땅콩 | 오이, ...

const customPhraseGen = new PhraseGen({ customNouns: ['보라돌이', '뚜비', '나나', '뽀'] });
phraseGen.getNoun(); // 보라돌이 | 뚜비 | 나나 | 뽀
```

### 

### getAdjective: string

`getAdjective()` takes one optional parameter: 

- **suffix**: string - optional override on the suffix for the adjective
  - default: '하다'
- returns a random adjective in the form of `[adjective][suffix] // ex) '예리하다' ` 

```js
const phraseGen = new PhraseGen();
phraseGen.getAdjective(); // 당당하다, 굉장하다, 대단하다
phraseGen.getAdjective("해요"); // 당당해요, 굉장해요, 대단해요

const customPhraseGen = new PhraseGen({ customAdjectives: ['발그레','누리끼리','거무스름'] });
phraseGen.getAdjective(); // 발그레하다 | 누리끼리하다 | 거무스름하다
```

### set

used to reconfigure one or more properties of the phrase generator object. Takes in one **Object** as parameter with optional properties as below: 

- **adjSuffix**: string - customizable suffix for the first adjective.

  - example: `{ adjSuffix: '헸어도' } //would create '무심했어도-착한-오소리'` 

- **delimiter**: string - overrides default delimiter to the provided string(conventionally a character)

  - example: `{ delimiter: '__' } // would create '진지하고__굉장한__감자'`

- **nouns**: [string] - custom set of nouns to randomize the phrase from

  - example: `{ customNouns: ['키보드','마우스','웹캠','모니터'] }`

- **adjectives**: [string] - custom set of adjectives to randomize the phrase from

  - *The form of adjectives should be words that are compatible with the form of `-하다` without the suffix, in order to keep the phrase gramatically accurate, as shown in the example below:
  - example: `{ customNouns: ['당당','소심','건들건들','위대'] }`

  

```js
const phraseGen = new PhraseGen();
phraseGen.generatePhrase(); // 적합하고-진지한-상추

// Valid #1
phraseGen.set({ delimiter: '__' , adjSuffix: '하지만'});
phraseGen.generatePhrase(); // 단단하지만__상냥한__호두

// Valid #2
const config = {
  adjSuffix: '하지만',
  nouns: ['개발자', '매니저', '디자이너'],
  adjectives: ['부지런','성실','나태','유능'],
  delimiter: '..'
};
phraseGen.set(config);
phraseGen.generatePhrase(); // 나태하지만..유능한..디자이너

// Invalid #1
phraseGen.set('string'); // Must be an object

// Invalid #2
phraseGen.set({ randomProp: 'random' , adjSuffix: '하지만'}); // Error -- cannot contain foreign property

```

-----

## 🧑🏻‍💻 Author

👤 **Ju An Kang**

* Github: [@JuAn-Kang](https://github.com/JuAn-Kang)
* LinkedIn: [@ju-an-kang](https://linkedin.com/in/ju-an-kang)

<!-- ## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JuAn-Kang/korean-random-words/issues). You can also take a look at the [contributing guide](https://github.com/JuAn-Kang/korean-random-words/blob/master/CONTRIBUTING.md). -->

-----

## ☕️ Brain fluid

 <a href="https://www.buymeacoffee.com/doubtfulmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="50"></a> <a href="https://donaricano.com/mypage/1707573255__1Wxe-" target="_blank"><img src="https://d1u4yishnma8v5.cloudfront.net/donarincano_gift.png" alt="Donaricano" height="50"></a>

-----

## ⭐️ Share support

If you find this useful or fun, ⭐️ this project!

-----

## 📝 License

Copyright © 2021 [Ju An Kang](https://github.com/JuAn-Kang).<br />
This project is [Apache--2.0](https://github.com/JuAn-Kang/korean-random-words/blob/master/LICENSE) licensed.
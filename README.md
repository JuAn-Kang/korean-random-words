<h1 align="center">korean-random-words π°π·-π²-βοΈ</h1>
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

- π View README in... [![korean-badge](https://img.shields.io/static/v1?label=%EA%B0%80&message=%ED%95%9C%EA%B5%AD%EC%96%B4&color=eeeeee&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words/blob/main/README/README_KR.md) | [![korean-badge](https://img.shields.io/static/v1?label=A&message=English&color=333333&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words#readme)



## π Overview

`korean-random-words` generates a 3-word phrase in the general form of `[adjective][suffix]-[adjective]ν-[noun]` , such as `λΎ°μ‘±νκ³ -μ©κ°ν-μ μΈμ₯`. Using default properties, the randomly generated phrase with the form above will be one of `256^3 * 5 = 83,886,080` possible phrases, with (currently) 256 nouns, 256 adjectives, and 5 variations of the suffix for the first adjective.

As a disclaimer, the package is _not_ designed with cryptographycally secure randomness in mind.

-----

## β¨ Demo

Coming Soon

-----

## πΎ Install

```sh
npm install korean-random-words # npm
yarn add korean-random-words # yarn
```

-----

## π§  Usage

```js
// ES6
import PhraseGen from 'korean-random-words';
const phraseGen = new PhraseGen();

// Node
var PhraseGen = require('korean-random-words');
var phraseGen = new PhraseGen();

phraseGen.generatePhrase(); // 'μ μνκ³ -λ§λν-ν΄μΌ'

```

### constructor

The constructor takes an object with 4 optional properties:

- **adjSuffix**: string - customizable suffix for the first adjective.
  - default: `'νκ³ ' | 'νμ§λ§' | 'νλ°' | 'ν΄λ' | 'ν΄μ'` and is randomized upon each call.
  - example: `{ adjSuffix: 'νΈμ΄λ' } //would create 'λ¬΄μ¬νμ΄λ-μ°©ν-μ€μλ¦¬'` 
- **delimiter**: string - overrides default delimiter to the provided string(conventionally a character)
  - default: '-'
  - example: `{ delimiter: '__' } // would create 'μ§μ§νκ³ __κ΅μ₯ν__κ°μ'`
- **customNouns**: [string] - custom set of nouns to randomize the phrase from
  - default: a word bank of common nouns
  - example: `{ customNouns: ['ν€λ³΄λ','λ§μ°μ€','μΉμΊ ','λͺ¨λν°'] }`
- **customAdjectives**: [string] - custom set of adjectives to randomize the phrase from
  - default: a word bank of common adjectives
  - *The form of adjectives should be words that are compatible with the form of `-νλ€` without the suffix, in order to keep the phrase gramatically accurate, as shown in the example below:
  - example: `{ customNouns: ['λΉλΉ','μμ¬','κ±΄λ€κ±΄λ€','μλ'] }`

Below are some examples of constructing the phrase generator: 

```js
import PhraseGen from 'korean-random-words';

// default constructor
const phraseGen = new PhraseGen();
phraseGen.generatePhrase(); // 'μ μνκ³ -λ§λν-ν΄μΌ'

// partial object
const phraseGen = new PhraseGen({
  delimiter: '__',
  adjSuffix: 'νμ΄λ'
});
phraseGen.generatePhrase(); // 'μ μνμ΄λ__λ§λν__ν΄μΌ'

// pass in configuration
const phraseGenConfig = {
  customNouns: ['ν€λ³΄λ','λ§μ°μ€','μΉμΊ ','λͺ¨λν°'],
  customAdjectives: ['λΉλΉ','μμ¬','κ±΄λ€κ±΄λ€','μλ'],
  delimiter: '__',
  adjSuffix: 'νμ΄λ'
};
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // 'μμ¬νμ΄λ__μλν__λͺ¨λν°'

```

### generatePhrase: string

- returns a generated phrase with the supplied configurations

```js
const phraseGenConfig = { /* optional configs */ }
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // 'μμ¬νμ΄λ__μλν__λͺ¨λν°'
```

### getNoun: string

- returns a random noun, either from the default noun bank or the supplied list of custom nouns

```js
const phraseGen = new PhraseGen();
phraseGen.getNoun(); // κ³ μ΄λμΉ | λμ½© | μ€μ΄, ...

const customPhraseGen = new PhraseGen({ customNouns: ['λ³΄λΌλμ΄', 'λλΉ', 'λλ', 'λ½'] });
phraseGen.getNoun(); // λ³΄λΌλμ΄ | λλΉ | λλ | λ½
```

### 

### getAdjective: string

`getAdjective()` takes one optional parameter: 

- **suffix**: string - optional override on the suffix for the adjective
  - default: 'νλ€'
- returns a random adjective in the form of `[adjective][suffix] // ex) 'μλ¦¬νλ€' ` 

```js
const phraseGen = new PhraseGen();
phraseGen.getAdjective(); // λΉλΉνλ€, κ΅μ₯νλ€, λλ¨νλ€
phraseGen.getAdjective("ν΄μ"); // λΉλΉν΄μ, κ΅μ₯ν΄μ, λλ¨ν΄μ

const customPhraseGen = new PhraseGen({ customAdjectives: ['λ°κ·Έλ ','λλ¦¬λΌλ¦¬','κ±°λ¬΄μ€λ¦'] });
phraseGen.getAdjective(); // λ°κ·Έλ νλ€ | λλ¦¬λΌλ¦¬νλ€ | κ±°λ¬΄μ€λ¦νλ€
```

### set

used to reconfigure one or more properties of the phrase generator object. Takes in one **Object** as parameter with optional properties as below: 

- **adjSuffix**: string - customizable suffix for the first adjective.

  - example: `{ adjSuffix: 'νΈμ΄λ' } //would create 'λ¬΄μ¬νμ΄λ-μ°©ν-μ€μλ¦¬'` 

- **delimiter**: string - overrides default delimiter to the provided string(conventionally a character)

  - example: `{ delimiter: '__' } // would create 'μ§μ§νκ³ __κ΅μ₯ν__κ°μ'`

- **nouns**: [string] - custom set of nouns to randomize the phrase from

  - example: `{ customNouns: ['ν€λ³΄λ','λ§μ°μ€','μΉμΊ ','λͺ¨λν°'] }`

- **adjectives**: [string] - custom set of adjectives to randomize the phrase from

  - *The form of adjectives should be words that are compatible with the form of `-νλ€` without the suffix, in order to keep the phrase gramatically accurate, as shown in the example below:
  - example: `{ customNouns: ['λΉλΉ','μμ¬','κ±΄λ€κ±΄λ€','μλ'] }`

  

```js
const phraseGen = new PhraseGen();
phraseGen.generatePhrase(); // μ ν©νκ³ -μ§μ§ν-μμΆ

// Valid #1
phraseGen.set({ delimiter: '__' , adjSuffix: 'νμ§λ§'});
phraseGen.generatePhrase(); // λ¨λ¨νμ§λ§__μλ₯ν__νΈλ

// Valid #2
const config = {
  adjSuffix: 'νμ§λ§',
  nouns: ['κ°λ°μ', 'λ§€λμ ', 'λμμ΄λ'],
  adjectives: ['λΆμ§λ°','μ±μ€','λν','μ λ₯'],
  delimiter: '..'
};
phraseGen.set(config);
phraseGen.generatePhrase(); // λννμ§λ§..μ λ₯ν..λμμ΄λ

// Invalid #1
phraseGen.set('string'); // Must be an object

// Invalid #2
phraseGen.set({ randomProp: 'random' , adjSuffix: 'νμ§λ§'}); // Error -- cannot contain foreign property

```

-----

## π§π»βπ» Author

π€ **Ju An Kang**

* Github: [@JuAn-Kang](https://github.com/JuAn-Kang)
* LinkedIn: [@ju-an-kang](https://linkedin.com/in/ju-an-kang)

<!-- ## π€ Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JuAn-Kang/korean-random-words/issues). You can also take a look at the [contributing guide](https://github.com/JuAn-Kang/korean-random-words/blob/master/CONTRIBUTING.md). -->

-----

## βοΈ Brain fluid

 <a href="https://www.buymeacoffee.com/doubtfulmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="50"></a> <a href="https://donaricano.com/mypage/1707573255__1Wxe-" target="_blank"><img src="https://d1u4yishnma8v5.cloudfront.net/donarincano_gift.png" alt="Donaricano" height="50"></a>

-----

## β­οΈ Share support

If you find this useful or fun, β­οΈ this project!

-----

## π License

Copyright Β© 2021 [Ju An Kang](https://github.com/JuAn-Kang).<br />
This project is [Apache--2.0](https://github.com/JuAn-Kang/korean-random-words/blob/master/LICENSE) licensed.
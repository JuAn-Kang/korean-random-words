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

> TLDR: μ½κΈ° νλ , μ μ μλ λ¬Έμμ«μμ΄λ³΄λ€ λ λ°λΆν λλ€μ€νΈλ§

π View README in... [![korean-badge](https://img.shields.io/static/v1?label=%EA%B0%80&message=%ED%95%9C%EA%B5%AD%EC%96%B4&color=eeeeee&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words/blob/main/README/README_KR.md) | [![korean-badge](https://img.shields.io/static/v1?label=A&message=English&color=333333&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words#readme)



## π μ€λͺ

`korean-random-words` λ `λΎ°μ‘±νκ³ -μ©κ°ν-μ μΈμ₯` μ²λΌ `[νμ©μ¬][μ λ―Έμ¬]-[νμ©μ¬]ν-[λͺμ¬]` μ κ°μ ννμ λ¬΄μμ μ΄κ΅¬λ₯Ό μμ±νλ ν¨ν€μ§μλλ€. λ¨μ΄ μ νμ₯ λ° μ»€μ€ν λ¨μ΄ λͺ©λ‘ μ¬μ©μ΄ κ°λ₯νμ§λ§, κΈ°λ³Έκ°μ κ²½μ°, (νμ¬) λͺμ¬ 256 λ¨μ΄, νμ©μ¬ 256 λ¨μ΄, μ λ―Έμ¬ 5 κ°μ§λ‘ μ΄ `256^3 * 5 = 83,886,080` κ°μ μ΄κ΅¬λ₯Ό μμ±ν  μ μμ΅λλ€. 

λΆμ μ νκ² μ°μΌ μΌμ (λΆλ) μκ² μ§λ§, μ΄ ν¨ν€μ§μ λ¬΄μμ λ¨μ΄ μ‘°ν© μκ³ λ¦¬μ¦μ "Cryptographically secure"νμ§ μμμ κ°μ‘°ν©λλ€.

-----

## β¨ λ°λͺ¨

μ»€λ°μ¨

-----

## πΎ μ€μΉ

```sh
npm install korean-random-words # npm
yarn add korean-random-words # yarn
```

-----

## π§  μ¬μ©

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

- **adjSuffix**: string - μ²«λ²μ¨° νμ©μ¬ λ€μ λΆμ μ λ―Έμ¬ (Optional)
  - default: `'νκ³ ' | 'νμ§λ§' | 'νλ°' | 'ν΄λ' | 'ν΄μ'` and is randomized upon each call.
  - example: `{ adjSuffix: 'νΈμ΄λ' } // would create 'λ¬΄μ¬νμ΄λ-μ°©ν-μ€μλ¦¬'` 
- **delimiter**: string - λ¨μ΄ μ¬μ΄λ₯Ό μ΄μ΄μ£Όλ κ΅¬λΆλ¬Έμ (Optional)
  - default: '-'
  - example: `{ delimiter: '__' } // would create 'μ§μ§νκ³ __κ΅μ₯ν__κ°μ'`
- **customNouns**: [string] - μ¬μ©μ μ§μ  λͺμ¬ λͺ©λ‘ (Optional)
  - default: κΈ°λ³Έκ°μΌλ‘ μ κ³΅λλ λͺμ¬ λͺ©λ‘
  - example: `{ customNouns: ['ν€λ³΄λ','λ§μ°μ€','μΉμΊ ','λͺ¨λν°'] }`
- **customAdjectives**: [string] - μ¬μ©μ μ§μ  νμ©μ¬ λͺ©λ‘ (Optional)
  - default: κΈ°λ³Έκ°μΌλ‘ μ κ³΅λλ νμ©μ¬ λͺ©λ‘
  - dynamic suffix appropriationμ΄ μμ§ μκΈ° λλ¬Έμ νμ¬ μ§μνλ νμ©μ¬λ `-νλ€` λ‘ λλ  μ μλ λ¨μ΄λ€μλλ€.
  - example: `{ customNouns: ['λΉλΉ','μμ¬','κ±΄λ€κ±΄λ€','μλ'] }`

μμ: 

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

- λ¬΄μμλ‘ μμ±λ μ΄κ΅¬λ₯Ό λ°νν©λλ€.

```js
const phraseGenConfig = { /* optional configs */ }
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // 'μμ¬νμ΄λ__μλν__λͺ¨λν°'
```

### getNoun: string

- λͺμ¬ λͺ©λ‘(μ¬μ©μ μ§μ , μμ κ²½μ° κΈ°λ³Έ λͺ©λ‘) μ€ ν κ°μ λ¨μ΄λ₯Ό λ°νν©λλ€.

```js
const phraseGen = new PhraseGen();
phraseGen.getNoun(); // κ³ μ΄λμΉ | λμ½© | μ€μ΄, ...

const customPhraseGen = new PhraseGen({ customNouns: ['λ³΄λΌλμ΄', 'λλΉ', 'λλ', 'λ½'] });
phraseGen.getNoun(); // λ³΄λΌλμ΄ | λλΉ | λλ | λ½
```

### 

### getAdjective: string

- **suffix**: string - μ¬μ©μ μ§μ  μ λ―Έμ¬ (Optional)
  - default: 'νλ€'
- νμ©μ¬ λͺ©λ‘(μ¬μ©μ μ§μ , μμ κ²½μ° κΈ°λ³Έ λͺ©λ‘) μ€ ν κ°μ λ¨μ΄λ₯Ό  `[adjective][suffix] // ex) 'μλ¦¬νλ€' `  μ ννλ‘ λ°νν©λλ€.

```js
const phraseGen = new PhraseGen();
phraseGen.getAdjective(); // λΉλΉνλ€, κ΅μ₯νλ€, λλ¨νλ€
phraseGen.getAdjective("ν΄μ"); // λΉλΉν΄μ, κ΅μ₯ν΄μ, λλ¨ν΄μ

const customPhraseGen = new PhraseGen({ customAdjectives: ['λ°κ·Έλ ','λλ¦¬λΌλ¦¬','κ±°λ¬΄μ€λ¦'] });
phraseGen.getAdjective(); // λ°κ·Έλ νλ€ | λλ¦¬λΌλ¦¬νλ€ | κ±°λ¬΄μ€λ¦νλ€
```

### set

ν κ°μ§ μ΄μμ μμ±μ μλ°μ΄νΈν©λλ€. μλμ κ°μ Optional propertyλ€λ‘ κ΅¬μ±λ  **Object** λ₯Ό μ¬μ©ν©λλ€.

- **adjSuffix**: string - μ²«λ²μ¨° νμ©μ¬ λ€μ λΆμ μ λ―Έμ¬ (Optional).
- example: `{ adjSuffix: 'νΈμ΄λ' } //would create 'λ¬΄μ¬νμ΄λ-μ°©ν-μ€μλ¦¬'` 
- **delimiter**: string - λ¨μ΄ μ¬μ΄λ₯Ό μ΄μ΄μ£Όλ κ΅¬λΆλ¬Έμ (Optional)
- example: `{ delimiter: '__' } // would create 'μ§μ§νκ³ __κ΅μ₯ν__κ°μ'`
- **nouns**: [string] - λͺμ¬ λͺ©λ‘ (Optional)
- example: `{ customNouns: ['ν€λ³΄λ','λ§μ°μ€','μΉμΊ ','λͺ¨λν°'] }`
- **adjectives**: [string] - νμ©μ¬ λͺ©λ‘ (Optional)
  - dynamic suffix appropriationμ΄ μμ§ μκΈ° λλ¬Έμ νμ¬ μ§μνλ νμ©μ¬λ `-νλ€` λ‘ λλ  μ μλ λ¨μ΄λ€μλλ€.
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

## π§π»βπ» μμμ

π€ **Ju An Kang**

* Github: [@JuAn-Kang](https://github.com/JuAn-Kang)
* LinkedIn: [@ju-an-kang](https://linkedin.com/in/ju-an-kang)

<!-- ## π€ Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JuAn-Kang/korean-random-words/issues). You can also take a look at the [contributing guide](https://github.com/JuAn-Kang/korean-random-words/blob/master/CONTRIBUTING.md). -->

-----

## βοΈ μ»€νΌλ₯Ό λ¨Ήκ³  μλΌμ

 <a href="https://www.buymeacoffee.com/doubtfulmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="50"></a> <a href="https://donaricano.com/mypage/1707573255__1Wxe-" target="_blank"><img src="https://d1u4yishnma8v5.cloudfront.net/donarincano_gift.png" alt="Donaricano" height="50"></a>

-----

## β­οΈ μ§μνκΈ°

λ§μμ λμ λ€λ©΄, μ΄ νλ‘μ νΈλ₯Ό Starν΄μ£ΌμΈμ.

-----

## π λΌμ΄μΌμ€

Copyright Β© 2021 [Ju An Kang](https://github.com/JuAn-Kang).<br />
This project is [Apache--2.0](https://github.com/JuAn-Kang/korean-random-words/blob/master/LICENSE) licensed.
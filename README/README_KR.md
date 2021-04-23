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

> TLDR: 읽기 힘든, 알 수 없는 문자숫자열보다 덜 따분한 랜덤스트링

🌏 View README in... [![korean-badge](https://img.shields.io/static/v1?label=%EA%B0%80&message=%ED%95%9C%EA%B5%AD%EC%96%B4&color=eeeeee&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words/blob/main/README/README_KR.md) | [![korean-badge](https://img.shields.io/static/v1?label=A&message=English&color=333333&style=for-the-badge)](https://github.com/JuAn-Kang/korean-random-words#readme)



## 📃 설명

`korean-random-words` 는 `뾰족하고-용감한-선인장` 처럼 `[형용사][접미사]-[형용사]한-[명사]` 와 같은 형태의 무작위 어구를 생성하는 패키지입니다. 단어 수 확장 및 커스텀 단어 목록 사용이 가능하지만, 기본값의 경우, (현재) 명사 256 단어, 형용사 256 단어, 접미사 5 가지로 총 `256^3 * 5 = 83,886,080` 개의 어구를 생성할 수 있습니다. 

부적절하게 쓰일 일은 (부디) 없겠지만, 이 패키지의 무작위 단어 조합 알고리즘은 "Cryptographically secure"하지 않음을 강조합니다.

-----

## ✨ 데모

커밍쑨

-----

## 💾 설치

```sh
npm install korean-random-words # npm
yarn add korean-random-words # yarn
```

-----

## 🧠 사용

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

- **adjSuffix**: string - 첫번쨰 형용사 뒤에 붙을 접미사 (Optional)
  - default: `'하고' | '하지만' | '한데' | '해도' | '해서'` and is randomized upon each call.
  - example: `{ adjSuffix: '헸어도' } // would create '무심했어도-착한-오소리'` 
- **delimiter**: string - 단어 사이를 이어주는 구분문자 (Optional)
  - default: '-'
  - example: `{ delimiter: '__' } // would create '진지하고__굉장한__감자'`
- **customNouns**: [string] - 사용자 지정 명사 목록 (Optional)
  - default: 기본값으로 제공되는 명사 목록
  - example: `{ customNouns: ['키보드','마우스','웹캠','모니터'] }`
- **customAdjectives**: [string] - 사용자 지정 형용사 목록 (Optional)
  - default: 기본값으로 제공되는 형용사 목록
  - dynamic suffix appropriation이 아직 없기 때문에 현재 지원하는 형용사는 `-하다` 로 끝날 수 있는 단어들입니다.
  - example: `{ customNouns: ['당당','소심','건들건들','위대'] }`

예시: 

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

- 무작위로 생성된 어구를 반환합니다.

```js
const phraseGenConfig = { /* optional configs */ }
const phraseGen = new PhraseGen(phraseGenConfig);
phraseGen.generatePhrase(); // '소심했어도__위대한__모니터'
```

### getNoun: string

- 명사 목록(사용자 지정, 없을 경우 기본 목록) 중 한 개의 단어를 반환합니다.

```js
const phraseGen = new PhraseGen();
phraseGen.getNoun(); // 고슴도치 | 땅콩 | 오이, ...

const customPhraseGen = new PhraseGen({ customNouns: ['보라돌이', '뚜비', '나나', '뽀'] });
phraseGen.getNoun(); // 보라돌이 | 뚜비 | 나나 | 뽀
```

### 

### getAdjective: string

- **suffix**: string - 사용자 지정 접미사 (Optional)
  - default: '하다'
- 형용사 목록(사용자 지정, 없을 경우 기본 목록) 중 한 개의 단어를  `[adjective][suffix] // ex) '예리하다' `  의 형태로 반환합니다.

```js
const phraseGen = new PhraseGen();
phraseGen.getAdjective(); // 당당하다, 굉장하다, 대단하다
phraseGen.getAdjective("해요"); // 당당해요, 굉장해요, 대단해요

const customPhraseGen = new PhraseGen({ customAdjectives: ['발그레','누리끼리','거무스름'] });
phraseGen.getAdjective(); // 발그레하다 | 누리끼리하다 | 거무스름하다
```

### set

한 가지 이상의 속성을 업데이트합니다. 아래와 같은 Optional property들로 구성된  **Object** 를 사용합니다.

- **adjSuffix**: string - 첫번쨰 형용사 뒤에 붙을 접미사 (Optional).
- example: `{ adjSuffix: '헸어도' } //would create '무심했어도-착한-오소리'` 
- **delimiter**: string - 단어 사이를 이어주는 구분문자 (Optional)
- example: `{ delimiter: '__' } // would create '진지하고__굉장한__감자'`
- **nouns**: [string] - 명사 목록 (Optional)
- example: `{ customNouns: ['키보드','마우스','웹캠','모니터'] }`
- **adjectives**: [string] - 형용사 목록 (Optional)
  - dynamic suffix appropriation이 아직 없기 때문에 현재 지원하는 형용사는 `-하다` 로 끝날 수 있는 단어들입니다.
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

## 🧑🏻‍💻 원작자

👤 **Ju An Kang**

* Github: [@JuAn-Kang](https://github.com/JuAn-Kang)
* LinkedIn: [@ju-an-kang](https://linkedin.com/in/ju-an-kang)

<!-- ## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JuAn-Kang/korean-random-words/issues). You can also take a look at the [contributing guide](https://github.com/JuAn-Kang/korean-random-words/blob/master/CONTRIBUTING.md). -->

-----

## ☕️ 커피를 먹고 자라요

 <a href="https://www.buymeacoffee.com/doubtfulmr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="50"></a> <a href="https://donaricano.com/mypage/1707573255__1Wxe-" target="_blank"><img src="https://d1u4yishnma8v5.cloudfront.net/donarincano_gift.png" alt="Donaricano" height="50"></a>

-----

## ⭐️ 지원하기

마음에 드신다면, 이 프로젝트를 Star해주세요.

-----

## 📝 라이센스

Copyright © 2021 [Ju An Kang](https://github.com/JuAn-Kang).<br />
This project is [Apache--2.0](https://github.com/JuAn-Kang/korean-random-words/blob/master/LICENSE) licensed.
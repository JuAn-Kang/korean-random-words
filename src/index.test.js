import PhraseGen from './index';
import assert from 'assert';

describe("default constructor", () => {
  const generator = new PhraseGen();

  it("successfully returns random string", () => {
    assert(generator.generatePhrase().split('-').length === 3);
  });

  it("getNoun returns a noun", () => {
    assert(generator.nouns.includes(generator.getNoun()))
  });

  it("getAdjective returns an adjective", () => {
    const adj = generator.getAdjective();
    assert(adj.substr(-2) === "하다")
    assert(generator.adjectives.includes(adj.slice(0,adj.length - 2)))
  });

  it("getAdjective returns custom suffixed adj when supplied", () => {
    const adj = generator.getAdjective("해요");
    assert(adj.substr(-2) === "해요")
    assert(generator.adjectives.includes(adj.slice(0,adj.length - 2)))
  });

  it("Object extension is restricted for explicit assignment", () => {
    assert.throws(() => { generator.nonProperty = 'should not pass' }, TypeError)
  });

  it("Object extension is restricted for set({})", () => {
    assert.throws(() => { generator.set({nonProperty : 'should not pass'}) }, TypeError)
  });

  it("can modify valid properties with assignment", () => {
    generator.adjSuffix = '해도';
    generator.delimiter = '-';
    const firstPhraselet = generator.generatePhrase().split('-')[0];

    assert.strictEqual(firstPhraselet.slice(-2), '해도')
  });

  it("can modify valid properties with set", () => {
    generator.set({
      nouns: ['말랑이'],
      adjectives: ['말랑'],
      delimiter: ' ',
      adjSuffix: '하고',
    });
    
    assert.strictEqual(generator.generatePhrase() , '말랑하고 말랑한 말랑이')
  });
});

describe("partially configured constructor", () => {
  const options = {
    customNouns: ['말랑이'],
    delimiter: ' ',
  };
  const generator = new PhraseGen(options);

  it("generates from supplied criteria", () => {
    assert.strictEqual(generator.nouns.length, 1);
  });

  it("can modify properties", () => {
    generator.set({delimiter: '..'})
    assert.strictEqual(generator.generatePhrase().split('..').length, 3);
  });
});

describe("fully configured constructor", () => {
  const generator = new PhraseGen({
    customNouns: ['말랑이'],
    customAdjectives: ['말랑'],
    delimiter: ' ',
    adjSuffix: '하고'
  });

  it("generates from supplied criteria", () => {
    assert.strictEqual(generator.generatePhrase(), '말랑하고 말랑한 말랑이');
  });

  it("can modify properties", () => {
    generator.delimiter = '..'
    assert.strictEqual(generator.generatePhrase(), '말랑하고..말랑한..말랑이');
  });
});

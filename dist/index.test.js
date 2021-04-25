'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('default constructor', function () {
  var generator = new _index2.default();

  it('successfully returns random string', function () {
    (0, _assert2.default)(generator.generatePhrase().split('-').length === 3);
  });

  it('successfully returns the array form if configured', function () {
    (0, _assert2.default)(generator.generatePhrase({ array: true }).length === 3);
  });

  it('getNoun returns a noun', function () {
    (0, _assert2.default)(generator.nouns.includes(generator.getNoun()));
  });

  it('getAdjective returns an adjective', function () {
    var adj = generator.getAdjective();
    (0, _assert2.default)(adj.substr(-2) === '하다');
    (0, _assert2.default)(generator.adjectives.includes(adj.slice(0, adj.length - 2)));
  });

  it('getAdjective returns custom suffixed adj when supplied', function () {
    var adj = generator.getAdjective('해요');
    (0, _assert2.default)(adj.substr(-2) === '해요');
    (0, _assert2.default)(generator.adjectives.includes(adj.slice(0, adj.length - 2)));
  });

  it('Object extension is restricted for explicit assignment', function () {
    _assert2.default.throws(function () {
      generator.nonProperty = 'should not pass';
    }, TypeError);
  });

  it('Object extension is restricted for set({})', function () {
    _assert2.default.throws(function () {
      generator.set({ nonProperty: 'should not pass' });
    }, TypeError);
  });

  it('can modify valid properties with assignment', function () {
    generator.adjSuffix = '해도';
    generator.delimiter = '-';
    var firstPhraselet = generator.generatePhrase().split('-')[0];

    _assert2.default.strictEqual(firstPhraselet.slice(-2), '해도');
  });

  it('can modify valid properties with set', function () {
    generator.set({
      nouns: ['말랑이'],
      adjectives: ['말랑'],
      delimiter: ' ',
      adjSuffix: '하고'
    });

    _assert2.default.strictEqual(generator.generatePhrase(), '말랑하고 말랑한 말랑이');
  });
});

describe('partially configured constructor', function () {
  var options = {
    customNouns: ['말랑이'],
    delimiter: ' '
  };
  var generator = new _index2.default(options);

  it('generates from supplied criteria', function () {
    _assert2.default.strictEqual(generator.nouns.length, 1);
  });

  it('can modify properties', function () {
    generator.set({ delimiter: '..' });
    _assert2.default.strictEqual(generator.generatePhrase().split('..').length, 3);
  });
});

describe('fully configured constructor', function () {
  var generator = new _index2.default({
    customNouns: ['말랑이'],
    customAdjectives: ['말랑'],
    delimiter: ' ',
    adjSuffix: '하고'
  });

  it('generates from supplied criteria', function () {
    _assert2.default.strictEqual(generator.generatePhrase(), '말랑하고 말랑한 말랑이');
  });

  it('can modify properties', function () {
    generator.delimiter = '..';
    _assert2.default.strictEqual(generator.generatePhrase(), '말랑하고..말랑한..말랑이');
  });
});

describe('default dictionaries: ', function () {
  var generator = new _index2.default();
  it('all nouns are unique', function () {
    _assert2.default.strictEqual(new Set(generator.nouns).size, generator.nouns.length);
  });

  it('all adjectives are unique', function () {
    _assert2.default.strictEqual(new Set(generator.adjectives).size, generator.adjectives.length);
  });
});
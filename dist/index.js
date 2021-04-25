'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright 2021 Ju An Kang

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var _words = require('./assets/words');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getRandElem = function getRandElem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var PhraseGen = function () {
  function PhraseGen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$delimiter = _ref.delimiter,
        delimiter = _ref$delimiter === undefined ? '-' : _ref$delimiter,
        customNouns = _ref.customNouns,
        customAdjectives = _ref.customAdjectives,
        adjSuffix = _ref.adjSuffix;

    _classCallCheck(this, PhraseGen);

    this.adjSuffix = adjSuffix;
    this.nouns = customNouns || _words.nouns;
    this.adjectives = customAdjectives || _words.adjectives;
    this.delimiter = delimiter;

    Object.preventExtensions(this);
  }

  /**
   * Generates a random word string from the word pools
   *
   * @return {string} - [adj]-[adj]-[noun]
   * @memberof PhraseGen
   */


  _createClass(PhraseGen, [{
    key: 'generatePhrase',
    value: function generatePhrase() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$array = _ref2.array,
          array = _ref2$array === undefined ? false : _ref2$array;

      var phraseBlocks = [getRandElem(this.adjectives) + (this.adjSuffix || getRandElem(_words.firstAdjSuffixes)), getRandElem(this.adjectives) + '\uD55C', getRandElem(this.nouns)];

      return array ? phraseBlocks : phraseBlocks.join(this.delimiter);
    }

    /**
     * Returns a random noun existing in the noun word pool
     *
     * @return {string} - noun
     * @memberof PhraseGen
     */

  }, {
    key: 'getNoun',
    value: function getNoun() {
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

  }, {
    key: 'getAdjective',
    value: function getAdjective() {
      var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '하다';

      return getRandElem(this.adjectives) + suffix;
    }

    /**
     * Conveniently update properties with an object
     *
     * @param {Object} props - properties to update: [adjSuffix, delimiter, adjectives, nouns]
     * @memberof PhraseGen
     */

  }, {
    key: 'set',
    value: function set(props) {
      var _this = this;

      Object.entries(props).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        _this[k] = v;
      });
    }
  }]);

  return PhraseGen;
}();

module.exports = PhraseGen;
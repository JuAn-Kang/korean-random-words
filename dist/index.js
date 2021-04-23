"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _words = require("./assets/words");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getRandElem = function getRandElem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var PhraseGen = function () {
  function PhraseGen() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$delimiter = _ref.delimiter,
        delimiter = _ref$delimiter === undefined ? "-" : _ref$delimiter,
        _ref$customNouns = _ref.customNouns,
        customNouns = _ref$customNouns === undefined ? null : _ref$customNouns,
        _ref$customAdjectives = _ref.customAdjectives,
        customAdjectives = _ref$customAdjectives === undefined ? null : _ref$customAdjectives,
        _ref$adjSuffix = _ref.adjSuffix,
        adjSuffix = _ref$adjSuffix === undefined ? null : _ref$adjSuffix;

    _classCallCheck(this, PhraseGen);

    this.adjSuffix = adjSuffix;
    this.nouns = customNouns || _words.nouns;
    this.adjectives = customAdjectives || _words.adjectives.concat(customAdjectives);
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
    key: "generatePhrase",
    value: function generatePhrase() {
      return [getRandElem(this.adjectives) + (this.adjSuffix || getRandElem(_words.firstAdjSuffixes)), getRandElem(this.adjectives) + "한", getRandElem(this.nouns)].join(this.delimiter);
    }

    /**
     * Returns a random noun existing in the noun word pool
     *
     * @return {string} - noun
     * @memberof PhraseGen
     */

  }, {
    key: "getNoun",
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
    key: "getAdjective",
    value: function getAdjective() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$suffix = _ref2.suffix,
          suffix = _ref2$suffix === undefined ? "하다" : _ref2$suffix;

      return getRandElem(this.adjectives) + suffix;
    }

    /**
     * Conveniently update properties with an object
     *
     * @param {Object} props - properties to update: [adjSuffix, delimiter, adjectives, nouns]
     * @memberof PhraseGen
     */

  }, {
    key: "set",
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
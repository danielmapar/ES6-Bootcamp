'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
    this._name = name;
  }

  _createClass(Person, [{
    key: 'greet',
    value: function greet() {
      console.log('Hello, my name is: ' + this.name);
    }
  }]);

  return Person;
}();

var Max = exports.Max = function (_Person) {
  _inherits(Max, _Person);

  function Max() {
    _classCallCheck(this, Max);

    return _possibleConstructorReturn(this, (Max.__proto__ || Object.getPrototypeOf(Max)).apply(this, arguments));
  }

  return Max;
}(Person);

var MaxNew = exports.MaxNew = function (_Person2) {
  _inherits(MaxNew, _Person2);

  function MaxNew(age) {
    _classCallCheck(this, MaxNew);

    var _this2 = _possibleConstructorReturn(this, (MaxNew.__proto__ || Object.getPrototypeOf(MaxNew)).call(this, 'Max'));

    _this2.age = age;
    return _this2;
  }

  _createClass(MaxNew, [{
    key: 'originalGreet',
    value: function originalGreet() {
      _get(MaxNew.prototype.__proto__ || Object.getPrototypeOf(MaxNew.prototype), 'greet', this).call(this);
      _get(MaxNew.prototype.__proto__ || Object.getPrototypeOf(MaxNew.prototype), 'greet', this).call(this);
    }
  }, {
    key: 'greet',
    value: function greet() {
      console.log('Hello, my name is: ' + this.name + ' age ' + this.age);
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      if (value > 10) {
        this._name = value;
      }
    }
  }], [{
    key: 'staticMethod',
    value: function staticMethod() {
      console.log('static');
    }
  }]);

  return MaxNew;
}(Person);

var ConvertableArray = exports.ConvertableArray = function (_Array) {
  _inherits(ConvertableArray, _Array);

  function ConvertableArray() {
    var _ref;

    _classCallCheck(this, ConvertableArray);

    for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref = ConvertableArray.__proto__ || Object.getPrototypeOf(ConvertableArray)).call.apply(_ref, [this].concat(items)));

    _this3.constructor = ConvertableArray;
    _this3.__proto__ = ConvertableArray.prototype;
    return _this3;
  }

  _createClass(ConvertableArray, [{
    key: 'test',
    value: function test() {
      var returnArray = [];
      this.forEach(function (value) {
        return returnArray.push('Converted!' + value);
      });
      return returnArray;
    }
  }]);

  return ConvertableArray;
}(Array);
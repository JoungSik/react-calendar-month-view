"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  background-color: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: ", ";\n  left: ", ";\n  top: ", ";\n  right: 0;\n  color: ", ";\n  background-color: transparent;\n\n  p {\n    margin: 0;\n    font-weight: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 14.28571429%;\n  position: relative;\n  background-color: ", ";\n  border: ", ";\n  border-width: ", ";\n  animation: ", " 0.5s ease;\n  box-sizing: border-box;\n\n  :after {\n    content: \"\";\n    display: block;\n    margin-top: 100%;\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isSunday = function isSunday(date) {
  return date === "Sunday";
};

var isSaturday = function isSaturday(date) {
  return date === "Saturday";
};

var TD = _styledComponents["default"].td(_templateObject(), function (props) {
  return props.smallCalendar ? "white" : props.isToday ? _constants.COLORS.lightgray : _constants.COLORS.verylightgray;
}, "1px solid lightgray", function (props) {
  return props.smallCalendar && props.isToday ? "0.1em" : "0px";
}, _constants.fadeIn);

var DayNumber = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.smallCalendar ? 0 : "6% 10% 0 0";
}, function (props) {
  return props.smallCalendar ? "calc(50% - 14px)" : "unset";
}, function (props) {
  return props.smallCalendar ? "calc(50% - 14px)" : 0;
}, function (props) {
  return isSunday(props.date) ? "#f26f63" : isSaturday(props.date) ? "#61b9d1" : "black";
}, function (props) {
  return props.isToday ? 800 : 400;
}); // rows represents week of month, and each column represents a day


var TableContent = /*#__PURE__*/function (_Component) {
  _inherits(TableContent, _Component);

  var _super = _createSuper(TableContent);

  function TableContent() {
    var _this;

    _classCallCheck(this, TableContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_renderCalendar", function () {
      var date = _this.props.date;
      var currDayInMonth = (0, _moment["default"])(date).startOf("month");
      var endOfMonth = (0, _moment["default"])(date).endOf("month");
      var daysElementArray = [];

      while (currDayInMonth.isBefore(endOfMonth)) {
        daysElementArray.push( /*#__PURE__*/_react["default"].createElement("tr", {
          key: currDayInMonth.format()
        }, _this._renderByWeek(currDayInMonth)));
      }

      return daysElementArray;
    });

    _defineProperty(_assertThisInitialized(_this), "_renderByWeek", function (currDayInMonth) {
      var _this$props = _this.props,
          smallCalendar = _this$props.smallCalendar,
          renderDay = _this$props.renderDay,
          onClickDay = _this$props.onClickDay,
          dayTextStyle = _this$props.dayTextStyle,
          activeDayStyle = _this$props.activeDayStyle,
          inactiveDayStyle = _this$props.inactiveDayStyle;
      var currentMonth = currDayInMonth.month(); // these change when the while loop detects the first or last day of month

      var isFirstWeek = false;
      var isLastWeek = false;
      var daysToRender = []; // Days rendered in a week must be at least 1, and we want to stop on the next sunday
      // Also, we want to make sure that we don't overshoot to the next month

      var _loop = function _loop() {
        var isToday = currDayInMonth.diff((0, _moment["default"])().startOf("day"), "days") === 0;
        var date = Object.assign({}, currDayInMonth);
        var dayNumber = (0, _moment["default"])(currDayInMonth).format("yyyy-MM-DD");
        daysToRender.push( /*#__PURE__*/_react["default"].createElement(TD, {
          key: currDayInMonth.format("DDMMYY"),
          isToday: isToday,
          smallCalendar: smallCalendar,
          style: isToday ? activeDayStyle : inactiveDayStyle
        }, renderDay(currDayInMonth.toISOString()), /*#__PURE__*/_react["default"].createElement(DayNumber, {
          isToday: isToday,
          smallCalendar: smallCalendar,
          date: (0, _moment["default"])(date).format("dddd"),
          style: dayTextStyle,
          onClick: function onClick() {
            return onClickDay(dayNumber);
          }
        }, /*#__PURE__*/_react["default"].createElement("p", null, currDayInMonth.format("D"))))); // sets if the current day is the first or last week

        if (currDayInMonth.diff((0, _moment["default"])(currDayInMonth).startOf("month"), "days") === 0) {
          isFirstWeek = true;
        } else if (currDayInMonth.diff((0, _moment["default"])(currDayInMonth).endOf("month"), "days") === 0) {
          isLastWeek = true;
        }

        currDayInMonth.add(1, "days");
      };

      while ((daysToRender.length === 0 || currDayInMonth.isoWeekday() % 7 !== 0) && currDayInMonth.month() <= currentMonth) {
        _loop();
      }

      if (isFirstWeek) {
        // if first week, we want to pad blank elements at the start
        for (var i = daysToRender.length; i < 7; i++) {
          daysToRender.unshift( /*#__PURE__*/_react["default"].createElement(TD, {
            key: currDayInMonth.format("M") + i,
            smallCalendar: smallCalendar,
            style: inactiveDayStyle
          }, /*#__PURE__*/_react["default"].createElement("div", null)));
        }
      } else if (isLastWeek) {
        //if last week, we want to pad blank elements at the end
        for (var _i = daysToRender.length; _i < 7; _i++) {
          daysToRender.push( /*#__PURE__*/_react["default"].createElement(TD, {
            key: currDayInMonth.format("M") + _i,
            smallCalendar: smallCalendar,
            style: inactiveDayStyle
          }, /*#__PURE__*/_react["default"].createElement("div", null)));
        }
      }

      return daysToRender;
    });

    return _this;
  }

  _createClass(TableContent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this._renderCalendar());
    }
  }]);

  return TableContent;
}(_react.Component);

exports["default"] = TableContent;

_defineProperty(TableContent, "propTypes", {
  date: _propTypes["default"].instanceOf(_moment["default"]).isRequired,
  smallCalendar: _propTypes["default"].bool,
  renderDay: _propTypes["default"].func,
  onClickDay: _propTypes["default"].func,
  dayTextStyle: _propTypes["default"].object,
  activeDayStyle: _propTypes["default"].object,
  inactiveDayStyle: _propTypes["default"].object
});

_defineProperty(TableContent, "defaultProps", {
  renderDay: function renderDay() {},
  onClickDay: function onClickDay() {}
});
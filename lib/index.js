'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createReducer = exports.selectAction = undefined;

var _ramda = require('ramda');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createReducer = function createReducer(initial, selector) {
	return function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
		var action = arguments[1];
		return selector(action)(state);
	};
};

var branch = function branch(_branch) {
	return [(0, _ramda.propEq)('type', _branch[0]), _branch[1]];
};

var selectAction = function selectAction(branches) {
	return (0, _ramda.cond)([].concat(_toConsumableArray((0, _ramda.map)(branch, branches)), [[_ramda.T, (0, _ramda.always)(_ramda.identity)]]));
};

exports.selectAction = selectAction;
exports.createReducer = createReducer;
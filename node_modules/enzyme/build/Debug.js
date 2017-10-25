Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeName = typeName;
exports.spaces = spaces;
exports.indent = indent;
exports.debugNode = debugNode;
exports.debugNodes = debugNodes;

var _without = require('lodash/without');

var _without2 = _interopRequireDefault(_without);

var _escape = require('lodash/escape');

var _escape2 = _interopRequireDefault(_escape);

var _compact = require('lodash/compact');

var _compact2 = _interopRequireDefault(_compact);

var _functionPrototype = require('function.prototype.name');

var _functionPrototype2 = _interopRequireDefault(_functionPrototype);

var _RSTTraversal = require('./RSTTraversal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function typeName(node) {
  return typeof node.type === 'function' ? node.type.displayName || (0, _functionPrototype2['default'])(node.type) || 'Component' : node.type;
}

function spaces(n) {
  return Array(n + 1).join(' ');
}

function indent(depth, string) {
  return string.split('\n').map(function (x) {
    return '' + String(spaces(depth)) + String(x);
  }).join('\n');
}

function propString(prop) {
  switch (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) {
    case 'function':
      return '{[Function]}';
    case 'string':
      return '"' + String(prop) + '"';
    case 'number':
    case 'boolean':
      return '{' + String(prop) + '}';
    case 'object':
      return '{{...}}';
    default:
      return '{[' + (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) + ']}';
  }
}

function propsString(node) {
  var props = (0, _RSTTraversal.propsOfNode)(node);
  var keys = (0, _without2['default'])(Object.keys(props), 'children');
  return keys.map(function (key) {
    return String(key) + '=' + String(propString(props[key]));
  }).join(' ');
}

function indentChildren(childrenStrs, indentLength) {
  return childrenStrs.length ? '\n' + String(childrenStrs.map(function (x) {
    return indent(indentLength, x);
  }).join('\n')) + '\n' : '';
}

function debugNode(node) {
  var indentLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof node === 'string' || typeof node === 'number') return (0, _escape2['default'])(node);
  if (!node) return '';

  var childrenStrs = (0, _compact2['default'])((0, _RSTTraversal.childrenOfNode)(node).map(function (n) {
    return debugNode(n, indentLength, options);
  }));
  var type = typeName(node);

  var props = options.ignoreProps ? '' : propsString(node);
  var beforeProps = props ? ' ' : '';
  var afterProps = childrenStrs.length ? '>' : ' ';
  var childrenIndented = indentChildren(childrenStrs, indentLength);
  var nodeClose = childrenStrs.length ? '</' + String(type) + '>' : '/>';
  return '<' + String(type) + beforeProps + String(props) + afterProps + String(childrenIndented) + nodeClose;
}

function debugNodes(nodes) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return nodes.map(function (node) {
    return debugNode(node, undefined, options);
  }).join('\n\n\n');
}
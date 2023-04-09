function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * 返回一个指定长度的随机字符串
 * @param length 长度
 */
function randomString(length) {
  if (!length || isNaN(length) || length <= 0) {
    return "";
  }
  var arr = [].concat(_toConsumableArray(Array(10).fill(0).map(function (v, i) {
    return 48 + i;
  })), _toConsumableArray(Array(26).fill(0).map(function (v, i) {
    return 65 + i;
  })), _toConsumableArray(Array(26).fill(0).map(function (v, i) {
    return 97 + i;
  })));
  return Array(length).fill(0).map(function () {
    return String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
  }).join("");
}

export { randomString };

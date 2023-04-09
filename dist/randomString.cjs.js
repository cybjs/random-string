'use strict';

/**
 * 返回一个指定长度的随机字符串
 * @param length 长度
 */
function randomString(length) {
  if (!length || isNaN(length) || length <= 0) {
    return "";
  }
  var arr = Array(10).fill(0).map(function (v, i) {
    return 48 + i;
  }) // 0-9
  .concat(Array(26).fill(0).map(function (v, i) {
    return 65 + i;
  }) // A-Z
  ).concat(Array(26).fill(0).map(function (v, i) {
    return 97 + i;
  }) // a-z
  );

  return Array(length).fill(0).map(function () {
    return String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
  }).join("");
}

exports.randomString = randomString;

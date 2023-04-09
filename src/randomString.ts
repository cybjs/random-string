/**
 * 返回一个指定长度的随机字符串
 * @param length 长度
 */
export function randomString(length: number) {
  if (!length || isNaN(length) || length <= 0) {
    return "";
  }

  const arr = [
    ...Array(10)
      .fill(0)
      .map((v, i) => 48 + i), // 0-9
    ...Array(26)
      .fill(0)
      .map((v, i) => 65 + i), // A-Z
    ...Array(26)
      .fill(0)
      .map((v, i) => 97 + i), // a-z
  ];

  return Array(length)
    .fill(0)
    .map(() => String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]))
    .join("");
}

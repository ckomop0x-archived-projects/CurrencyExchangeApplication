/**
 * @param x
 * @param n
 * @returns {*}
 */
export function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i += 1) {
    result *= x;
  }
  return result;
}

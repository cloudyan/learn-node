exports.merge = function merge(a, b) {
  if (a && b) {
    /* eslint guard-for-in: 0 */
    for (const key in b) {
      a[key] = b[key]
    }
  }
  return a
}

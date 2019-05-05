
const env = {};

module.exports = {
  set(config) {
    Object.assign(env);
  },
  get() {
    return { ...env };
  },
  remove() {},
};

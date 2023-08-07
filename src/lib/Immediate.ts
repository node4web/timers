export = class Immediate<T> {
  #hasRef = true;
  constructor() {}

  hasRef() {
    return this.#hasRef;
  }

  ref() {
    this.#hasRef = true;
  }

  unref() {
    this.#hasRef = false;
  }

  // @ts-ignore
  [Symbol.dispose]() {}
};

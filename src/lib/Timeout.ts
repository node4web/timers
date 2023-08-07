export = class Timeout<T extends any[]> {
  static {
    // @ts-ignore
    if (Symbol.dispose) {
      // @ts-ignore
      this.prototype[Symbol.dispose] = function () {
        this.close();
      };
    }
  }
  // @ts-ignore
  declare [typeof Symbol.dispose]?: () => void;

  _idleTimeout: number;
  _idlePrev = this;
  _idleNext = this;
  _idleStart: number | null = null;
  _onTimeout: (...args: T) => any;
  _timerArgs: T;
  _repeat: boolean;
  _destroyed = false;
  #id: number = 0;
  #refed: boolean;
  constructor(
    f: (...a: T) => any,
    ms: number,
    args: T,
    repeat: boolean,
    ref: boolean
  ) {
    this._idleTimeout = ms;
    this._onTimeout = f;
    this._timerArgs = args;
    this._repeat = repeat;
    this.#refed = ref;
  }

  refresh() {}

  hasRef() {
    return this.#refed;
  }

  ref() {
    this.#refed = true;
  }

  unref() {
    this.#refed = false;
  }

  close() {
    if (!this._destroyed) {
      if (this._repeat) {
        clearInterval(this.#id);
      } else {
        clearTimeout(this.#id);
      }
      this._destroyed = true;
    }
    return this;
  }

  [Symbol.toPrimitive]() {
    return this.#id;
  }

  private [Symbol.for("nodejs.util.inspect.custom")](
    depth: number,
    options: import("node:util").InspectOptions,
    inspect: typeof import("node:util").inspect
  ) {
    return inspect(this, { ...options, depth: 0, customInspect: false });
  }
};

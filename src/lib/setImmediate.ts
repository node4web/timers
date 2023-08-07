// @ts-ignore
// prettier-ignore
let setImmediate: <T extends any[]>(f: (...a: T) => any, ...a: T) => number = globalThis.setImmediate;
if (typeof setImmediate === "undefined") {
  setImmediate = function setImmediate<T extends any[]>(
    f: (...a: T) => any,
    ...a: T
  ) {
    return +setTimeout(f, 0, ...a);
  };
}

export = setImmediate;

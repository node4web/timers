const globalSetImmediate = globalThis.setImmediate;

function setImmediate(f, ...args) {
  if (globalSetImmediate) {
    globalSetImmediate(f, ...args);
  } else {
    setTimeout(f, 0, ...args);
  }
}

export = setImmediate;

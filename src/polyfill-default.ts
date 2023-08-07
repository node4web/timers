import setTimeout_ from "./setTimeout.js";
import clearTimeout_ from "./clearTimeout.js";
import setImmediate_ from "./setImmediate.js";
import clearImmediate_ from "./clearImmediate.js";
import setInterval_ from "./setInterval.js";
import clearInterval_ from "./clearInterval.js";

declare global {}

globalThis.setTimeout = setTimeout_;
globalThis.clearTimeout = clearTimeout_;
globalThis.setImmediate = setImmediate_;
globalThis.clearImmediate = clearImmediate_;
globalThis.setInterval = setInterval_;
globalThis.clearInterval = clearInterval_;

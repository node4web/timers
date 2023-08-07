import Timeout from "./lib/Timeout.js";

export = function setTimeout<T extends any[]>(
  f: (...a: T) => any,
  delay: number,
  ...args: T
) {
  const timeout = new Timeout(f, delay, args, false, true);
  insert(timeout, timeout._idleTimeout);
  return timeout;
};

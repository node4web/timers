import Timeout from "./Timeout.js";
import Immediate from "./Immediate.js";

export = function unenroll(item: Timeout<any> | Immediate<any>) {
  if (item._destroyed) {
    return;
  }
  item._destroyed = true;

  clearTimeout(+item);
  clearImmediate(+item);

  item._idleTimeout = -1;
};

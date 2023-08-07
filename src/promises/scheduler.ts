import setImmediate from "../lib/setImmediate.js";

class Scheduler {
  async wait(delay: number, options: { signal?: AbortSignal } = {}) {
    const { signal } = options;
    signal?.throwIfAborted();
    return new Promise((resolve, reject) => {
      const id = setTimeout(resolve, delay);
      signal?.addEventListener(
        "abort",
        () => {
          reject(signal.reason);
          clearTimeout(id);
        },
        { once: true }
      );
    });
  }

  async yield() {
    return new Promise((resolve) => setImmediate(resolve));
  }
}

export = new Scheduler();

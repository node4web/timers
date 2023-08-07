const globalSetTimeout = globalThis.setTimeout;

async function setTimeout<T = void>(
  delay: number,
  value: T = undefined!,
  options: { ref?: boolean; signal?: AbortSignal } = {}
) {
  const { ref, signal } = options;
  signal?.throwIfAborted();
  return new Promise<T>((resolve, reject) => {
    const id = globalSetTimeout(resolve, delay, value);
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

export = setTimeout;

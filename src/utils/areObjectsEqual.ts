export function areObjectsEqual<T>(x: T, y: T): boolean {
  if (x === y) return true;

  if (typeof x === "object" && typeof y === "object") {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const key in x) {
      if (!areObjectsEqual(x[key], y[key])) return false;
    }

    return true;
  }

  return false;
}

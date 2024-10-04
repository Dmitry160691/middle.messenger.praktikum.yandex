export function areObjectsEqual<T>(x: T, y: T): boolean {
  if (!x || !y) return false;
  
  if (typeof x !== 'object' || typeof y !== 'object') {
    return x === y;
  }
  
  const xKeys = Object.keys(x);
  const yKeys = Object.keys(y);
  
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  
  for (const key of xKeys) {
    if (!areObjectsEqual(x[key], y[key])) {
      return false;
    }
  }
  
  return true;
}
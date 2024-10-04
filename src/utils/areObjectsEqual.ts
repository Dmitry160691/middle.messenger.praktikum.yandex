export function areObjectsEqual<T>(x: T, y: T): boolean {
  if (!x || !y) return false;
  
  if (typeof x !== 'object' || typeof y !== 'object') {
    return x === y;
  }
  
  const xKeys = Object.keys(x) as string[];
  const yKeys = Object.keys(y) as string[];
  
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  
  for (let key of xKeys) {
    if (!areObjectsEqual(x[key], y[key])) {
      return false;
    }
  }
  
  return true;
}
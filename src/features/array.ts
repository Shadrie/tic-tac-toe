export function arrayEquals<T>(a: Array<T>, b: Array<T>): boolean {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

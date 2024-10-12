export function compareEquality(a: any, b: any) {
  if (a === b) {
    return "Strong Equal"
  } else if (a == b) {
    return "Weak Equal"
  }
  return "Completely Different"
} 
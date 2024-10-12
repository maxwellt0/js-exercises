export const getFullName = (person: { firstName: string, lastName: string }) => {
  // destructuring: const {a, b} = person
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`; // string template literal: `${}`
};

export const getFirstAndLastItems = (array: string[]) => {
  const [first, , last] = array;
  return [first, last];
};

export const getSumOfAll = (...items: number[]) => {
  return items.reduce((sum, num) => sum + num, 0);
};

export const joinTwoArrays = (a: number[], b: number[]) => {
  return [...a, ...b];
};

export const joinArrays = (...arrays: number[][]) => {
  return arrays.reduce((res, arr) => [...res, ...arr], []);
};
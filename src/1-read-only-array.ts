function intersperse<T>(array: readonly T[], separator: T): T[] {
  const newArray: T[] = [];
  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(separator);
    }
    newArray.push(element);
  }
  return newArray;
}

const values: readonly string[] = ["A", "B", "C"];
values.push("D"); // error!

const valuesWithSeparators = intersperse(values, "X");

console.log(values);
console.log(valuesWithSeparators);

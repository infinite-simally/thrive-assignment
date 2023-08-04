export const copyDataForTables = <T>(array: T[]): T[] =>
  array.map((obj) => ({ ...obj }));

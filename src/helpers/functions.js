export const sortByKey = (array, key) => {
  array.sort((a, b) => {
    const keyA = a[key].toUpperCase();
    const keyB = b[key].toUpperCase();
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
  });

  return array;
};

export const findInArray = (array, key, searchValue) => {
  return array.find(element => element[key] === searchValue);
};

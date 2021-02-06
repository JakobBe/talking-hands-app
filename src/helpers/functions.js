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

export const findInArrayOfObjects = (array, key, searchValue) => {
  return array.find(element => element[key] === searchValue);
};

export const weightedSearch = ({ array, query, key }) => {
  const lowercaseQuery = query.toLowerCase();

  const searchArray = array.filter((element) => {
    return element[key].toLowerCase().includes(lowercaseQuery);
  });

  const weightedArray = searchArray.sort((element, nextElement) => {
    const elementQueryIndex = element[key].toLowerCase().indexOf(lowercaseQuery);
    const nextElementQueryIndex = nextElement[key].toLowerCase().indexOf(lowercaseQuery);

    return elementQueryIndex - nextElementQueryIndex;
  });

  return weightedArray;
}

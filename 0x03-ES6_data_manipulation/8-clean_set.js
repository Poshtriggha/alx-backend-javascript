function cleanSet(set, startString) {
  const filteredValues = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  return filteredValues.join('-');
}

export default cleanSet;

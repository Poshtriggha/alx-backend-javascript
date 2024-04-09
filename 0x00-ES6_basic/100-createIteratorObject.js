export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      if (currentIndex >= currentDepartment.length) {
        currentDepartmentIndex++;
        currentIndex = 0;
        return this.next();
      }

      const result = { value: currentDepartment[currentIndex], done: false };
      currentIndex++;
      return result;
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}


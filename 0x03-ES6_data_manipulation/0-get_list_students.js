function getListStudents() {
    var arrayOfObjects = [];

    arrayOfObjects.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
    arrayOfObjects.push({ id: 2, firstName: 'James', location: 'Columbia' },);
    arrayOfObjects.push({ name: 'Bob', age: 35 });

    return arrayOfObjects;
}

var result = getListStudents();

console.log(result);
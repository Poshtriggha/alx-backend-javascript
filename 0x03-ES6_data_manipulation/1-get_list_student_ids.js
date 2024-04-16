function getListStudentIds(arrayOfObjects) {
    // Check if the argument is an array
    if (!Array.isArray(arrayOfObjects)) {
        return [];
    }

    // Use map function to extract ids from each object in the array
    return arrayOfObjects.map(student => student.id);
}

export default getListStudentIds;

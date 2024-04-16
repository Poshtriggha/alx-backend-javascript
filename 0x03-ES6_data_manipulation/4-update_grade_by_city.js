function updateStudentGradeByCity(students, city, newGrades) {

    const filteredStudents = students.filter(student => student.location === city);

  
    const updatedStudents = filteredStudents.map(student => {
                const studentGrade = newGrades.find(grade => grade.studentId === student.id);

        
        if (studentGrade) {
            return { ...student, grade: studentGrade.grade };
        } else {
            return { ...student, grade: 'N/A' };
        }
    });

    return updatedStudents;
}

export default updateStudentGradeByCity;

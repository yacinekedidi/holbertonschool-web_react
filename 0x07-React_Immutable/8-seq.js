import { Seq } from 'immutable';

function printBestStudents(object) {
  const bestStudents = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => {
      student.firstName = `${student.firstName[0].toUpperCase()}${student.firstName.slice(
        1
      )}`;
      student.lastName = `${student.lastName[0].toUpperCase()}${student.lastName.slice(
        1
      )}`;
      return student;
    });
  console.log(bestStudents.toJS());
}

export default printBestStudents;

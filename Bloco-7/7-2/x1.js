const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const updateLesson2 = (object, key, value) => {
  let newKey = key;
  const turn = value;
  object[newKey] = turn;
};

const showKeys = (object) => Object.keys(object);

const lengthObject = (object) => {
  const length = Object.keys(object).length;
  return length;
};

const showValues = (object) => {
  const value = Object.values(object);
  return value;
};

// console.log(lesson2);
// updateLesson2(lesson2, 'turno', 'manhã');
// console.log(lesson2);
// console.log(showKeys(lesson3));
// console.log(lengthObject(lesson1));
// console.log(showValues(lesson2));
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const numberOfStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (i in array) {
    total += object[array[i]].numeroEstudantes;
  }
  return total;
};

const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(numberOfStudents(allLessons));
console.log(getValueByNumber(lesson1, 0));
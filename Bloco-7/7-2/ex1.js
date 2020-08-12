const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showSkills = (student) => {
  const skill = Object.keys(student);
  for (i in skill) {
    console.log(`${skill[i]}, Nível: ${student[skill[i]]}`);
  }
};
console.log('Estudante 1');
showSkills(student1);

console.log('Estudante 2');
showSkills(student2);
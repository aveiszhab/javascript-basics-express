const createPerson = (name, age) => {
  return person = { name:name, age:age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.prototype.hasOwnProperty.call(object,property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(a => a.age);
};

const findByName = (name, people) => {
  return people.find(element => element.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce((total, value) => total + value.age,0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: toName => `Hi ${toName}, my name is ${name} and I am ${age}!`
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};

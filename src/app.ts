const userName = 'Charlie';

// const add = (n1: number, n2: number = 13) => n1 + n1;

// console.log(add(5, 78));

const hobbies = ['Sports', 'CooKing'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
const person = {
  name: 'charlie',
  age: 30,
};
const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

console.log(add(1, 23, 4, 2234, 52, 23, 3));
const [sports, cooking] = hobbies;

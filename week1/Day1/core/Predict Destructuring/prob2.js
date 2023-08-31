const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
// name is not defined
console.log(otherName);
// otherName is not defined

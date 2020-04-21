/*const boxes =document.querySelectorAll('.box');
boxesArr = Array.from(boxes);
//Array.from(boxes).forEach(cur=>cur.style.color='red');
for(var i=0;i<boxesArr.length;i++){
    if(boxesArr[i].className==='box blue'){
        continue;
    }
    boxesArr[i].textContent='i changed';
}
const map=new Map();
map.set('question','what is the official name of the latest version of javascript ?');
map.set(1,'ES5');
map.set(2,'ES6');
map.set(3,'ES2015');
map.set(4,'ES7');
map.set('correct',3);
map.set(true,'correct answer');
map.set(false,'wrong, please try again');
console.log(map.get('question'));
for(let [key,value] of map.entries()){
    if(typeof(key)==='number'){
        console.log(`Answer ${key} : ${value}`);
    }
}
const ans=parseInt(prompt('choose correct option'));
console.log(map.get(ans===map.get('correct')));*/

class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Details() {
        console.log(`My name is ${this.name} and i am ${this.age} years old and my job is ${this.job} and i lived in rewa.`);
    }
};
let jhon = new Person('jhon', 26, 'Teacher');
jhon.Details();

class Employee extends Person {
    constructor(name, age, job, company) {
        super(name, age, job);
        this.company = company;
    }
    display() {
        console.log('working in  ' + this.company);
    }
}

let emliy = new Employee('Emliy', 22, 'Desioner', 'TCS');
emliy.Details();
emliy.display();
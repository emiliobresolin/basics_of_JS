const uno = 10;
let duno = 10.5;
let omg = false;
console.log(typeof(duno)); //TYPEOH

const a = [1, 2, 3, 4]; 
console.log(a);
a.push(3); // PUSH
console.log(a);

const n1 = 10;
const n2 = 3;
console.log(n1 ** n2); //POTENCIA
console.log(n1 % n2); // RESTO DISISAO

let contador = 3;
contador *= 2;
console.log(contador);

const n0 = '10';
const n001 = parseInt(n0);
const calc = n001 - 5;
console.log(calc);

let pi = 3.14159265358979323846;
console.log(pi.toFixed(2));

console.log('arredondando');
let yyy = Math.round(pi);
console.log(yyy);

console.log('aleatorio');
let ale = Math.round(Math.random() * (10 - 1));
console.log(ale);
while (ale<10)
{
    console.log(ale);
    ale++;
}


console.log('Array and function');
const studants = ['emilio', 'leticia', 'helena'];
console.log(studants[2]);
studants[studants.length] = 'Lula';
studants[studants.length] = 'Bozo';
console.log(studants);
studants.push('Brezola');
studants.unshift('Fernando Henrrique Cardoso');
console.log(studants);
studants.pop();
studants.shift();
console.log(studants);
console.log(studants instanceof Array);


console.log('functions');
function sayhello(name)
{
    console.log(`Hello, ${name}.`);
}
sayhello('emilio');
function gooddaysir(name)
{
    return `Good morning, ${name}.`;
}
const vari = gooddaysir('emilio');
console.log(vari);

const squere = function (n)
{
    return n ** 0.5;
}
console.log(squere(25));
const squereroot = (n) => 
{
    return n ** 0.5;
}
console.log(squereroot(25));
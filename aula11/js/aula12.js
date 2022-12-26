let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

const temp = varA;
varA=varB;
varB=varC;
varC=temp;

console.log(varA, varB, varC);

let unastring = "um \"texto\"";
console.log(unastring);
console.log(unastring.charAt(4));
console.log(unastring.indexOf('o', 3));
console.log(unastring.lastIndexOf('o'));
console.log(unastring.match(/[a-z]/));
console.log(unastring.match(/[a-z]/g));
console.log(unastring.search(/x/));

console.log(unastring.length);

console.log(unastring.slice(5,8));


function makeperson(name,surname,age)
{
    return {
        name: name,
        surname: surname,
        age: age
    };
}
const person = makeperson('Emilio', 'Bresolin', 32);
console.log(person.name);


const pessoa=
{
    nome: 'Emilio',
    sobrenome: 'Bresolin',
    idade: 20,

    fala()
    {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
    },

    incrementoIdade()
    {
        this.idade++;
    }
};
pessoa.fala();
pessoa.incrementoIdade();
pessoa.fala();
pessoa.incrementoIdade();
pessoa.fala();
pessoa.incrementoIdade();



// PRIMITIVOS (IMUTAVEIS) - string, number, bool, indefined, null - valores
// REFERENCIA (MUTAVEIS) - array, object, function - passados por referencia (lugar na memoria)
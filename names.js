
/*1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.*/

/*function fullName(firstName, lastName){
    const risultato = firstName + lastName;
    return risultato;

}

const nome = fullName(firstName, lastName);
console.log (nome);
console.log(risultato); 

/*function fullName(){
    console.log(firsName + lastName)
}*/

/*function fullName(firstName, lastName){
    console.log(fullName);

}*/

function fullName(firstName, lastName){
    return firstName, lastName
}

// esportiamo solo la funzione fullName
module.exports = fullName;




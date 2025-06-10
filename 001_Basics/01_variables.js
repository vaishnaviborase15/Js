const accId = 2001;
let accEmail = "vsb@gmail.com";
var accPass = "12345";
accCity = "Shirpur" // it is possible
let accState;

//accId = 3001; not allowted

accEmail = "asb@gmail.com";
accPass = "12345678";
accCity = "Snk"

console.log(accId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accId, accEmail, accPass, accCity, accState])
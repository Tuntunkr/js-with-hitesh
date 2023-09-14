// let,const and var ki kahani 

const accountId = 12345;
let accountEmail= "tuntun.work01@gmail.com";
var accountPassword = "54321";
let accountState;

accountCity = "delhi";

 // accountId = 321; //not allowed

 accountEmail= "tw@gmail.com";
 accountPassword="9876";
 accountCity = "pune";
 accountState="cashless"

console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountEmail,accountPassword,accountCity,accountState])
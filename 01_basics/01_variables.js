const accountId = 144553
let accountEmail = "prajjwal@gmail.com"
var accountPassword = "123456"
accountCity = "Ranchi"
let accountState

// accountId = 2 // not allowed

accountEmail = "choubeyprajjwal@gmail.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
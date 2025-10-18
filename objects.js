var user = {
    fName : "Raj",
    lName : "Vish",
    Age : 18,
    City : "Lucknow",
    State : "Uttar Pradesh"
}

console.log(user)
console.log(user.Age)
console.log(user["City"])

user.Age = 19
user.height = 10
delete user.State

console.log(user)

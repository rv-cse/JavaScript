let arr = [23,19,67,41,56,84,29]

let z = arr.findIndex((a,b)=>{
    return a%2==0
})

console.log("The index is : ", z)
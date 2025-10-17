let arr = [2,56,42,5,9,75,31,95,3,6,24,68,15,43]

arr.sort()

console.log(arr)

arr.sort((a,b)=>{
    return a-b
})

console.log("In ascending order : ", arr )

arr.sort((a,b)=>{
    return b-a
})

console.log("In decending order : ", arr )
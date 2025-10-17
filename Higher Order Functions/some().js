let arr = [56,41,32,89,74,8,6,]

let r = arr.some((a,b)=>{
    return a%3==0
})

console.log(r)


let s = arr.some((a,b)=>{
    return a%9==0
})

console.log(s)
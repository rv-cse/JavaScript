let arr = [2,4,6,8,10,12]

let brr = arr.map(function(item,index){
    return item*item
})

console.log(brr)

let crr = arr.map((x,i)=>{
    return x*2
})

console.log(crr)

let drr = arr.map(x => x*x)

console.log(drr)

let err = arr.map((x) => x>6)

console.log(err)
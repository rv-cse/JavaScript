let arr = [3,6,9,12,15,18]

let sum = arr.reduce(function(total,item,index){
    return total += item
})

console.log(sum)

let product = arr.reduce(function(product,item,index){
    return product *= item 
})

console.log(product)
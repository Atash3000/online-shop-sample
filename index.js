const inventory = {
    sneakers:0,
    boots:23,
    jeans:33

}

const returnPromise =()=>{
return new Promise((resolve,reject)=>{
    let checkInventery=(obj){
        if(obj)

    }
     if(inventory.sneakers>0){
        resolve("your order is in procces")
    }else{
        reject('sorry item is sold out')
    }
})
}


let myPromise = returnPromise()
myPromise.then(resolvedValue=>console.log(resolvedValue))
.catch(rejectedValue=>console.log(rejectedValue))
//console.log(checkInventory(inventory))
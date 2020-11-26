let posts = [
    {title: 'shoes', price :34},
    {title : 'jeans', price :44 }
]

const getPost=()=>{
  setTimeout(() => {
    let output='';
    posts.forEach(item=>{
        output+=`<li>${item.title} ${item.price}</li>`
    })  
    document.body.innerHTML = output;
  }, 3000);

}


let inventory = [
    {name :'boots' ,price : 75},
    //{name :'jeans' , price : 34}
]
const getItem=(order,money)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let itemName='';
            let itemPrice = '';
            inventory.forEach(item=>itemName+=item.name)
            inventory.forEach(item=>itemPrice+=item.price)
            if(itemPrice <= money && itemName == order){
                resolve('your order is being procees')
            }else if(itemPrice> money && itemName==order){
                reject('you dont have enought money')

            }
            
        }, 2000);

    })
}
let promise1 =  getItem('boots',80)
promise1.then(resolved=>console.log(resolved))
.catch(rejected=>console.log(rejected))
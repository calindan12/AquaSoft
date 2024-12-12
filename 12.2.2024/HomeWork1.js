// // function fetchData1(callback) {
// //   setTimeout(() => {
// //       console.log("Data fetched!");
// //       callback("This is the data.");
// //   }, 2000);
// // }

// // fetchData1(data => {
// //   console.log("datele mele :" , data); 
// // });


// async function walkDog(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           const dogWalked = true;
//           if(dogWalked){
//               resolve("Dog was walked");
//           }else{
//               reject("Dog was not walked");
//           }
//       },1500)
//   })
// }


//  function cleanKitchen(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           const dogWalked = true;
//           if(dogWalked){
//               resolve("The kitchen was cleaned");
//           }else{
//               reject("The kitchen was not cleaned");
//           }
//       },1500)
//   })
// }


// async function takeOutTrash(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           const dogWalked = true;
//           if(dogWalked){
//               resolve("The trash was threw");
//           }else{
//               reject("The trash was not threw");
//           }
//       },1500)
//   })
// }


// async function doChores(){
//   const walkDogResult = await  walkDog();
//   console.log(walkDogResult);
  
//   const cleanKitchenResult =  await cleanKitchen();
//   console.log(cleanKitchenResult);
  
//   const takeOutTrashResult = await  takeOutTrash();
//   console.log(takeOutTrashResult);
  
//   console.log("You finsihed all the chores!");
// }

// doChores() 



// const obj5 = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(obj5));

// deepCopy.b.c = 3;
// console.log(deepCopy.b.c)
// console.log(obj5.b.c);



function functiePatratePerfecte(ridicarePutere) {
    const cache = {}; // Local cache
    const wrapper = function (arg) {
        if (cache[arg]) {
            console.log("Se află în cache:", cache[arg]);
            return cache[arg];
        }
        console.log("Calculăm");
        cache[arg] = ridicarePutere(arg);
        console.log("Avem:", cache[arg]);
        return cache[arg];
    };
    wrapper.cache = cache; // Atașăm cache-ul la funcție
    return wrapper;
}

function ridicarePutere(num) {
    return num * num;
}

const numar = functiePatratePerfecte(ridicarePutere);

console.log(numar(5)); 
console.log(numar(6)); 
console.log(numar(7)); 
console.log(numar(7));

// Listăm obiectul cache
console.log("Cache:", numar.cache);

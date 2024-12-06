// 1.1. ES6 - Methods (examples, explanations).

import { resolve } from "path";

        // 1.1.1

                //ES5 - metodele dintr-un obiect sunt definite folosind cuvântul function

                var ex1 = {
                    nume: "Calin",
                    spuneSalut: function() {
                    return "Salut ma numesc " + this.nume;
                    }
                };
                
                console.log(ex1.spuneSalut()); 

                
                //ES6 - metodele pot fi definite fără să fie nevoie de function.

                const ex2 = {
                    nume: "Calin",
                    spuneSalut() {
                    return `Salut numele meu este ${this.nume}`;
                    }
                };
                
                console.log(ex2.spuneSalut());

                // => se elimină redundanța folosirii cuvântului function

        
        // 1.1.2

                // ES5 - this se referă la obiectul care a apelat metoda. Dacă folosim o funcție din interior, trebuie să salvăm valoarea lui this, deoarece se pierde contextul.

                var ex3 = {
                    nume: "ES5",
                    spuneSalut: function() {
                      var self = this; // Salvează referința la `this`
                      function interior() {
                        return "Salut din " + self.nume;
                      }
                      return interior();
                    }
                  };
                  
                  console.log(ex3.spuneSalut());
        
                // ES6 - metodele folosesc this fără a fi nevoie să salvăm contextul, datorită lexical binding-ului.

                const ex4 = {
                    nume: "ES6",
                    spuneSalut() {
                      const interior = () => `Salut din ${this.nume}`;
                      return interior();
                    }
                  };
                  
                  console.log(ex4.spuneSalut());

        // 1.1.3

                // ES5 - Constructorii sunt definiți folosind funcții, iar metodele trebuie adăugate explicit în prototype pentru a fi reutilizabile.

                function PersoanaES5(nume) {
                    this.nume = nume;
                  }
                  
                  PersoanaES5.prototype.spuneSalut = function() {
                    return "Salut, eu sunt " + this.nume;
                  };
                  
                  var persoana1 = new PersoanaES5("Ion");
                  console.log(persoana1.spuneSalut());


                //ES6 - clasele oferă o sintaxă mult mai simplă și clară pentru constructori și metode.

                class PersoanaES6 {
                    nume:any
                    constructor(nume:any) {
                      this.nume = nume;
                    }
                  
                    spuneSalut() {
                      return `Salut, eu sunt ${this.nume}`;
                    }
                  }
                  
                  const persoana2 = new PersoanaES6("Maria");
                  console.log(persoana2.spuneSalut()); 

                // => Clasele oferă o sintaxă mai elegantă și metodelor le este atribuită direct prototype


// 1.2. Difference between var, let, and const.

        // 1. variabila 'globalVar' este de tip var => este vizibila in blocul funcției, sau global dacă sunt declarate în afara funcțiilor
        // 2.Poate sa fie declarata aceeasi variabilă în același scope fără vreo eroare
        var globalVar = "I'm a global variable";

        // 1.variabila 'blockScoped' este de tip let => este accesibilă doar în interiorul blocului în care a fost definită(ex.(if,else), (for,while)).
        // 2. Nu poate fi declarata aceeasi variabilă în același scope
        let blockScoped = "I'm block scoped";

        // 1. variabila 'immutable' este de tip const => nu poate sa fie modificata aceasta fiind imutabila
        // 2. are scope doar în interiorul blocului în care este declarat
        const immutable = "Can't change the value";



// 1.3 Spread operator.

    // Operatorul spread (...) - instrument ce permite spargerea elementelor dintr-un array, obiect sau alte tipuri iterabile.

        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const arrays = [...arr1, ...arr2];
        console.log(arrays);


        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const combined = { ...obj1, ...obj2 };
        console.log(combined);

// 1.4 Objects: How to iterate over an object, deep copy
        // 1.4.1 Iterate over an object
            // a) for...in
                const ex = { a: 1, b: 2, c: 3 };

                for (let key in ex) {
                    console.log(`${key}: ${ex[key]}`);
                }

            // b) Object.keys()
                const obj = { a: 1, b: 2, c: 3 };

                Object.keys(obj).forEach(key => {
                    console.log(`${key}: ${obj[key]}`);
                });
            
            // c) Object.entries()
                const obj3 = { a: 1, b: 2, c: 3 };

                for (const [key, value] of Object.entries(obj3)) {
                    console.log(`${key}: ${value}`);
                }

            // d) Object.values()
                const obj4 = { a: 1, b: 2, c: 3 };

                Object.values(obj4).forEach(value => {
                    console.log(value);
                });
        
        // 1.4.2 Deep copy
                // a) JSON.parse

                    const obj5 = { a: 1, b: { c: 2 } };
                    const deepCopy = JSON.parse(JSON.stringify(obj));
                    
                    deepCopy.b.c = 3;
                    console.log(deepCopy.b.c)
                    console.log(obj5.b.c);

// 1.5  Arrays - accessor, iteration, and mutator methods (which they are, how to use them)
        // 1.5.1 Accessor Methods
                // 1.5.1.2 concat - Concateneaza doi sau mai multi vectori și returnează un nou vector
                    const arr = [10, 20, 30, 40, 50];
                    const newArr = arr.concat([60, 70]);
                    console.log(newArr);

                // 1.5.1.3 includes - Verifică dacă un vector conține o anumită valoare.
                    console.log(arr.includes(30));

                // 1.5.1.4 indexOf - Returnează primul index al unei valori specificate dintr-un array. Returnează -1 dacă nu este găsit.
                    console.log(arr.indexOf(30));
                
                // 1.5.1.5 lastIndexOf - Returnează ultimul index al unei valori specificate dintr-un array. Returnează -1 dacă nu este găsit.
                    console.log(arr.lastIndexOf(30));
                
                // 1.5.1.6 slice - Returnează o copie a unei porțiuni a unui vector (nu include indexul final).
                    const sliced = arr.slice(1, 3);
                    console.log(sliced);
                
                // 1.5.1.7 join() - Convertește toate elementele într-un array, separate printr-un delimitator specificat.
                    const arrayjoined = arr.join('-');
                
                // 1.5.1.8 at() - Returnează elementul la un anumit index (suportă indici negativi).
                    console.log(arr.at(-1));
        
        // 1.5.2 Iteration Methods
                    const arr3 = [1, 2, 3, 4, 5];

                    // 1.5.2.1 forEach() - Execută o funcție pentru fiecare element de vector.
                    arr3.forEach(num => console.log(num * 2)); 
                    
                    // 1.5.2.2 map() - Creează un nou vector cu rezultatele apelării unei funcții pe fiecare element.
                    const doubled = arr3.map(num => num * 2);
                    console.log(doubled); 
                    
                    // 1.5.2.3 filter() - Creează un nou vector cu elemente care indeplinesc o conditie impusa de functia filter.
                    const even = arr3.filter(num => num % 2 === 0);
                    console.log(even);
                    
                    // 1.5.2.4 reduce() - Reduce matricea la o singură valoare prin executarea unei funcții de reducere pe fiecare element.
                    const sum = arr3.reduce((acc, num) => acc + num, 0);
                    console.log(sum);
                    
                    // 1.5.2.5 find() - Returnează primul element care îndeplinește o condiție.
                    const firstOdd = arr3.find(num => num % 2 !== 0);
                    console.log(firstOdd);
                    
                    // 1.5.2.6 some() - Verifică dacă cel puțin un element trece un test în funcția de apel invers. Returnează un boolean.
                    console.log(arr3.some(num => num > 3)); 

        
        // 1.5.3 Mutator Methods
                let arr6 = [1, 2, 3, 4, 5];

                // 1.5.3.1 push() - Adaugă unul sau mai multe elemente la sfârșitul vector.
                arr6.push(6);
                console.log(arr); 

                // 1.5.3.2 pop() - Sterge ultimul element din vector.
                arr6.pop();
                console.log(arr); 
                
                // 1.5.3.4 unshift() - Adaugă unul sau mai multe elemente la începutul matricei.
                arr6.unshift(0);
                console.log(arr);

                // 1.5.3.5 shift() - Sterge unul sau mai multe elemente la începutul matricei.
                arr6.shift();
                console.log(arr);
                
                // splice() - Adaugă, elimină sau înlocuiește elemente din matrice.
                arr6.splice(2, 1, 10); // Sterge un element de pe pozitia 2 si il inlocuieste cu valoarea 10
                console.log(arr);
                
                // sort() - Sortează elementele din vector
                arr6.sort((a, b) => b - a); // Sortare in ordine descrescatoare
                console.log(arr); 

                arr6.sort((a, b) => a - b); // Sortare in ordine crescatoare
                console.log(arr); 
                
                // fill() - Umple o parte / in totalitate vectorul cu o valoare statică.
                arr6.fill(0, 1, 4); // Umple de la index 1 la 4 cu elementul 0
                console.log(arr); // [10, 0, 0, 0, 1]

// 1.6 Promises. Callback.
 
    // 1.6.1 Promises

            function fetchData() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("Step 1: Data fetched!");
                        resolve("Data");
                    }, 1000);
                });
            }

            function processData(data) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("Step 2: Data processed!");
                        resolve("Processed " + data);
                    }, 1000);
                });
            }

            function saveData(data) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("Step 3: Data saved!");
                        resolve("Saved " + data);
                    }, 1000);
                });
            }

            // Ex Promises
            fetchData()
                .then(data => processData(data))
                .then(processedData => saveData(processedData))
                .then(savedData => console.log(savedData))
                .catch(error => console.error(error));
            
    // 1.6.2 Callback

            function fetchData1(callback) {
                setTimeout(() => {
                    console.log("Data fetched!");
                    callback("This is the data.");
                }, 2000);
            }
            
            fetchData1(data => {
                console.log(data); 
            });

// 1.7 Async. Await.
        // 1.7.1 Async - face ca o funcție să returneze o promisiune
        // 1.7.2 Await - face ca o funcție asincronă să aștepte o promisiune

        async function walkDog(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const dogWalked = true;
                    if(dogWalked){
                        resolve("Dog was walked");
                    }else{
                        reject("Dog was not walked");
                    }
                },1500)
            })
        }
        
        
        async function cleanKitchen(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const dogWalked = true;
                    if(dogWalked){
                        resolve("The kitchen was cleaned");
                    }else{
                        reject("The kitchen was not cleaned");
                    }
                },1500)
            })
        }
        
        
        async function takeOutTrash(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const dogWalked = true;
                    if(dogWalked){
                        resolve("The trash was threw");
                    }else{
                        reject("The trash was not threw");
                    }
                },1500)
            })
        }
        
        
        async function doChores(){
            const walkDogResult =   walkDog();
            console.log(walkDogResult);
            
            const cleanKitchenResult =   cleanKitchen();
            console.log(cleanKitchenResult);
            
            const takeOutTrashResult =   takeOutTrash();
            console.log(takeOutTrashResult);
            
            console.log("You finsihed all the chores!");
        }
        
        doChores() 
    
    // 1.8 Closures

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
    

// 1.9.1 useState()



// function UserInfo() {
//     const [user, setUser] = useState({ nume: "Mihai", puncteAcumulate: 0 });

//     const acumularePuncte = () => {
//         setUser(prevUser => ({ ...prevUser, puncte: prevUser.puncteAcumulate + 1 }));
//     };

//     const decrementarePuncte = () => {
//         setUser(prevUser => ({ ...prevUser, puncte: prevUser.puncteAcumulate - 1 }));
//     };

//     return (
//         <div>
//             <p>Nume: {user.name}</p>
//             <p>Vârstă: {user.puncte}</p>
//             <button onClick={acumularePuncte}>Incrementeaza puncte</button>
//             <button onClick={decrementarePuncte}>Decrementeaza puncte</button>
//         </div>
//     );
// }


// 1.9.2 useRef()


// function Timer() {
//     const count = useRef(0);

//     const increment = () => {
//         count.current += 1;
//         console.log(`Valoarea curentă: ${count.current}`);
//     };

//     return (
//         <div>
//             <button onClick={increment}>Crește</button>
//         </div>
//     );
// }




        
                
        



                


            

            
    




                  
                  
                  
                  
                  
                

function reject(arg0: string) {
    throw new Error("Function not implemented.");
}
  
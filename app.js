//EJERICIO 1:

let array=[1,2,3,4,3,2,1]
array.sort()
let unique;

array.forEach(unico=>{
    let count=0;
    for(let i=0;i<array.length;i++){
        if(unico==array[i])count++
    }
    if(count<2)unique=unico;
    
})
if(unique==undefined){unique="no hay unicos"} 
console.log("El numero unico es " + unique)

//Ejercicio 2:

function grades(grade){
    if(grade<0 || grade>100) return "Ingrese nota entre 0-100";
    if(grade>40 ){
        if(grade%5>=3){return grade+(5-grade%5)}
        else return grade
    }
    else return grade
}

console.log(grades(84))

//Ejercicio 3:
function binaryReversal(number){
    function convertToBinary (number) {
        let num = number;
        let binary = (num % 2).toString();
        for (; num > 1; ) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
        return binary;
    }
    let bin=convertToBinary(number).toString();
    let bina=bin.split("")
    let binar=[]
    bina.forEach(num=>{
        num==1?num=0:num=1;
        binar.push(num)
    })
    
    return binar.join().replace(/,/gm,"")
}

console.log(binaryReversal(12))

//Ejercicio 4

let matrix=[1,3,1,
            5,6,7,
            1,9,-6]

function sumaMatrix(matrix){
   return (matrix[0]+matrix[4]+matrix[8])+(matrix[2]+matrix[4]+matrix[6])
}

console.log(sumaMatrix(matrix))

//Ejercicio 5
function countingSort(arr) {
  let i,freq;
    let sortI = [100, 63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33]
    for (let sortI = 0; i < sortI.length; i++) {
        freq[arr[i]]++;
      } 
      return freq;
    }
    countingSort()

    //Ejercicio 6
    function countingValleys(steps, path) {
        let altitude = 0; 
        let valleys = 0; 
        for (let i = 0; i < steps; i++) {
          let step = path.charAt(i);
          if (step === 'U') {
            altitude++; 
            if (altitude === 0) {
              valleys++; 
            }
          } else {
            altitude--;
          }
        }
        return valleys;
      }
      countingValleys();


    //Ejercicio 7
    function esPangrama(s) {
        const letras = Array(26).fill(false); 
        const regex = /[a-zA-Z]/; 
        for (let i = 0; i < s.length; i++) {
          const c = s.charAt(i).toLowerCase(); 
          if (regex.test(c)) {
            const idx = c.charCodeAt(0) - 'a'.charCodeAt(0); 
            letras[idx] = true; 
          }
        }
        return letras.every(b => b); 
      }
      
      const oracion1 = 'We promptly judged antique ivory buckles for the next prize';
      const oracion2 = 'We promptly judged antique ivory buckles for the prize';
      console.log(esPangrama(oracion1) ? 'pangram' : 'not pangram'); 
      console.log(esPangrama(oracion2) ? 'pangram' : 'not pangram');
      
      //Ejercicio 8
      function marsExploration(s) {
        let changed = 0;
        for (let i = 0; i < s.length; i += 3) {
            if (s[i] !== 'S') changed++;
            if (s[i + 1] !== 'O') changed++;
            if (s[i + 2] !== 'S') changed++;
        }
        return changed;
    }
    console.log(marsExploration("SOSSPSSQSSOR")); // Output: 3
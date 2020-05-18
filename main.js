//3. .length
let cars = ["Ford", "Honda", "F2", "F3"];
console.log("03. length: " + cars.length);

//4. .concat()
let moreCars = ["F4", "F5", "F6", "Honda"];
let totalCars = cars.concat(moreCars);
console.log("04. concat: " + totalCars);

//5. ..indexOf() and .lastIndexOf()
let carsIndex = cars.indexOf("Honda");
let carsLastIndex = moreCars.lastIndexOf("Honda");
console.log("5a. indexOf: " + carsIndex);
console.log("5b. lastIndexOf: " + carsLastIndex);

//6. .join()
let stringOfCars = totalCars.join();
console.log("06. join: " + stringOfCars);

//7. .split() --- Help?
let carSplit = stringOfCars.split(" ");
console.log("07. split: " + carSplit);

//8. .reverse()
let carsInReverse = totalCars.reverse();
console.log("08. reverse: " + carsInReverse);

//9. .sort()
//code below from instructions
//alert(carsInReverse.indexOf('yourPrediction'));
let carsSort = carsInReverse.sort();
console.log("09. sort: " + carsSort);

//10. .slice()
let removedCars = carsInReverse.slice(5, 7);
console.log("10. slice: " + removedCars);

//11. .splice()
let splicedRevCars = carsInReverse.splice(2, 3, "Ford", "Honda");
console.log("11. splice: " + splicedRevCars);

//12. .push() - converts to 
let pushCars = splicedRevCars.push("Ford", "Honda");
console.log("12. push: " + pushCars);

//13. .pop()
carsInReverse.pop();
console.log("13. pop: " + carsInReverse);

//14. .shift())
carsInReverse.shift();
console.log("14. shift: " + carsInReverse);

//15. .unshift()
carsInReverse.unshift("GMC");
console.log("15. unshift: " + carsInReverse);

//16. .forEach()
let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
let newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

numbers.forEach(function addTwo(item, index)
{
    item += 2;
    newNumbers[index] = item;
});

console.log("16. forEach: " + newNumbers);
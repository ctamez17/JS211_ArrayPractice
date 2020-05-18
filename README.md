# Overview
Today you'll practice methods of arrays and then attaching your Tic, Tac, Toe logic to an index.html file so your user can have a friendlier interaction with your applications moving forward.

## Project 1 of 3: Arrays of Cars
1. Clone ArrayOfCars Repo.
2. Inside the file called main.js complete each of the following exercises.
### 3. .length
Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
Console.log the length of the array.
Use node main.js to run the program.
### 4. .concat()
Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
Run the program.
### 5. .indexOf() and .lastIndexOf()
Use the indexOf method to console.log the index of Honda.
Use the lastIndexOf method to console.log the index of Ford.
Run the program.
### 6. .join()
Use the join method to covert the array totalCars into a string called stringOfCars.
Run the program.
### 7. .split()
Use the split method to convert stringOfCars back intro an array called totalCars.
Run the program.
### 8. .reverse()
Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
Run the program.
### 9. .sort()

Use the sort method to put the array carsInReverse into alphabetical order.
Based on the types of cars you used, predict which item in the array should be at index 0.
Use the following code to confirm or reject your prediction:
  `alert(carsInReverse.indexOf('yourPrediction'));`
Run the program.

### 10. .slice()
Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
### 11. .splice()
Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
### 12. .push()
Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
### 13. .pop()
Use the pop method to remove and console.log the last item in the array carsInReverse.
### 14. .shift()
Use the shift method to remove and console.log the first item in the array carsInReverse.
### 15. .unshift()
Use the unshift method to add a new type of car to the array carsInReverse.
### 16. .forEach()
`Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.`

.forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

## Project 2 of 3: Tic, Tac, Toe GUI Instructions
Students will build the Tic Tac Toe application again but this time using the logic built in the last class.
Begin by white boarding and code planning the application.
Open your Tic-Tac-Toe app from last week.
From the master branch, create a new branch called: 'TicTacToe-GUI'
Use the project you built in Web 101 as a reference but now build it with the idea of logic first then front-end representation.
How to you get your html file to talk to your js file?
Check out index.html for an idea of how to start this game.

## Project 3 of 3: Pig Latin GUI Instructions
Connect your Pig Latin application to a GUI
Begin by white boarding and code planning the application.
Open your Pig Latin app from last week.
From the master branch, create a new branch called: 'PigLatin-GUI'
Start by making sure you have a place for the user to input a word, then a submit button, then a place for the output to be displayed.
How to you get your html file to talk to your js file?
Further Practice: Make you're app handle sentences and paragraphs at a time like this one.
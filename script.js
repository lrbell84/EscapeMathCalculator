let calculation = "";
let operations = 0;

const insert = (key) => {
// Here I added a function, when clicked by a button, will display on the calculator screen. 
	console.log(document.getElementById('calc').innerHTML)
	document.getElementById('calc').innerHTML =  document.getElementById('calc').innerHTML + key;
 }
 
 const clearCalculator = () => {
// Here's a function that clears the value in the calculator
    document.getElementById('calc').innerHTML = " ";
	document.getElementById('result').innerHTML = " ";
 }
 
 const calc = () => {
// Here I used regex, to set a pattern to search the special characters for operations
	let pattern = /([\+\-\/\*]+)/
	calculation = document.getElementById('calc').innerHTML;
// Here I split the calculation into numbers and operators by using .split() method
	operations = calculation.split(pattern);
	console.log(operations);
// Here I used the .shift method to remove the first number. Then I used the recursive process (calling itself inside of the function) I used an If statement to prevent an infinte loop.
	let total = Number(operations.shift())
	console.log("total = " + total);
	
	total = docalculations(total, 0);
	document.getElementById('result').innerHTML = total;
 }
//Here I did the calculations for the first value & second value
 const docalculations = (total, index) => {
	length = operations.length
	total = calculate(Number(total), operations[index], Number(operations[index+1])); 
	console.log("length =" +length);
	console.log("total =" +total);
	console.log("index =" +index);

	if ( index+2 < length ) {
		total = docalculations(total, index+2);		
		return Number(total);
	} else {
		return Number(total);
	}
 }
 
 const calculate = (firstValue, operator, secondValue) => {
	console.log("first value" + typeof(firstValue) + " value is " + firstValue);
	console.log("operation" + typeof(operator) + " value is " + operator);
	console.log("second value" + typeof(secondValue) + " value is " + secondValue);

// Here I'm using a PSEUDOCODE to switch all of the operations that can appear in the table 
	switch(operator) {
		case '+':
			total = firstValue + secondValue;
			break;
		case '-':
			total = firstValue - secondValue;
			break;
		case '/':
			total = firstValue / secondValue;
			break;
		case '*':
			total = firstValue * secondValue;
			break;
		default:
	}
	return total
 }


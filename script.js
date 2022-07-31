let calculation = "";
let operations = 0;

const insert = (key) => {
// add the corresponding item pushed by button to the calculator screen. When you click on a key it will insert the number or operator
	console.log(document.getElementById('calc').innerHTML)
	document.getElementById('calc').innerHTML =  document.getElementById('calc').innerHTML + key;
 }
 
 const clearCalculator = () => {
// just clear the value in the calculator
    document.getElementById('calc').innerHTML = " ";
	document.getElementById('result').innerHTML = " ";
 }
 
 const calc = () => {
// set pattern for regex, search the special characters for operations
	let pattern = /([\+\-\/\*]+)/
	calculation = document.getElementById('calc').innerHTML;
// split the calculation into numbers and operators
	operations = calculation.split(pattern);
	console.log(operations);
// get the first number then use recursion to process the rest (calling itself inside of the function)
	let total = Number(operations.shift())
	console.log("total = " + total);
	
	total = docalculations(total, 0);
	document.getElementById('result').innerHTML = total;
 }

 const docalculations = (total, index) => {
	length = operations.length
	total = calculate(Number(total), operations[index], Number(operations[index+1])); 
	console.log("length =" +length);
	console.log("total =" +total);
	console.log("index =" +index);
	if ( index+2 < length ) {
// as long as there are two more commands in the array we will process this again to do the next operations
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
// switch to do all of the operations that can appear in the table (PSEUDOCODE)
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


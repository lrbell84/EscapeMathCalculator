let calculation = "";
let operations = 0;

function insert(key) {
// add the corresponding item pushed by button to the calculator screen
	console.log(document.getElementById('calc').innerHTML)
	document.getElementById('calc').innerHTML =  document.getElementById('calc').innerHTML + key;
 }
 
 function clearCalculator() {
// just clear the value in the calculator
    document.getElementById('calc').innerHTML = " ";
 }
 
 function calc() {
// set pattern for regex, search the special characters for operations
	let pattern = /([\+\-\/\*]+)/
	calculation = document.getElementById('calc').innerHTML;
// split the calculation into numbers and operators
	operations = calculation.split(pattern);
	console.log(operations);
// get the first number then use recursion to process the rest
	total = parseInt(operations.shift())
	console.log("total = " + total);
	
	total = docalculations(total, 0);
	document.getElementById('calc').innerHTML = total;
 }
 
 function docalculations(total, index) {
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
 
 function calculate(firstValue, operator, secondValue) {
	console.log("first value" + typeof(firstValue) + " value is " + firstValue);
	console.log("operation" + typeof(operator) + " value is " + operator);
	console.log("second value" + typeof(secondValue) + " value is " + secondValue);
// switch to do all of the operations that can appear in the table
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

// let calcNumber = "";
// let count = 0;
// let lastE1 = "";
// let state = false;
// let lastNumber = 0;

// function Numbers(result) {
//     try {
//         if (result == '+' || result == '-' || result == '*' || result == '/' || result == '/100') {
//             if (state) {
//                 count += 1;
//                 calcNumber += result;
//                 lastNumber = calcNumber.slice(-1);
//                 result = result == "/100*" ? "%" : result;
//                 document.getElementById('calc').innerHTML += `<span id="sym-${count}" style="color:#ff3e39;margin:0 10px">${result}<span>`; state = false;
//             }
//         } else {
//             if (document.getElementById('calc').innerHTML == '0') {
//                 document.getElementById('calc').innerHTML = '';
//             }
//             calcNumber += result;
//             lastNumber = calcNumber.slice(-1);

//             state = true;
//             document.getElementById('calc').innerHTML += result;
//             if (eval(calcNumber).toString().length >= 10) {
//                 document.getElementById('result').innerHTML = expo(eval(calcNumber), 2);
//             } else {
//                 document.getElementById('result').innerHTML = eval(calcNumber);
//             }
//         }

//     } catch (e) {
//         console.log(e);
//     }
//  }
//  function clearButton() {
//     document.getElementById('calc').innerHTML = "0";
//     calcNumber = "";
//     result.innerHTML = 0;
//     state = false;
//  }

//  document.getElementById('backspace').addEventListener('click', () => {

//     if (lastNumber == '+' || lastNumber == '-' || lastNumber == '/') {
//         calcNumber = calcNumber.slice(-5) == "/100*" ? calcNumber.slice(0,-5) : calcNumber.subtr(0, calcNumber.length -1); lastNumber = calcNumber.slice(-1);
//         document.getElementById(`sym-${count}`).remove(); count -= 1;
//         if (eval(calcNumber).toString().length >= 10) {
//             document.getElementById('result').innerHTML = expo(eval(calcNumber),2);
//         } else {
//             document.getElementById('result').innerHTML = eval(calcNumber);
//         }
//         state = true;
//     } else {
//         calcNumber = calcNumber.substr(0, calcNumber.length - 1);
//         lastNumber = calcNumber.slice(-1);
//         values = document.getElementById('calc').innerHTML;
//         values = values.substr(0, values.toString().length - 1);
//         document.getElementById('calc').innerHTML = values;

//     }
//     if (calcNumber == "") {
//         document.getElementById('calc').innerHTML = "0";
//         result.innerHTML = 0;
//         state = false;
//         return;
//     }
//  });

//  function calc() {
//     document.getElementById('calc').innerHTML = document.getElementById('result').innerHTML;
//     state = false;
//     return;
//  }

//  function expo (x, f) {
//     return Number.parseFloat(x).toExponential(f);
//  }


// // const calc = () => {
// //     let D = "";
// //     let A = document.getElementById("num1").value;
// //     let B = document.getElementById("op").value;
// //     let C = document.getElementById("num2").value;
// //     if(B == "+")
// //     {
// //         D = A+C;
// //     }
// //     elseif(B == "-")
// //     {
// //         D = A-C;
// //     }
// //     elseif(B == "*")
// //     {
// //         D = A*C;
// //     }
// //     elseif(B == "÷")
// //     {
// //         D = A/C;
// //     }
// //     document.getElementById("result").innerHTML = D;
// // }
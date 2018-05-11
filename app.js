"use strict";
let payPrompt = prompt("Please enter your pay per hour", 0);
let hoursPrompt = prompt("Please enter hours", 0);
let wage;
if(hoursPrompt>40){
	wage = wageCalcOT(payPrompt, hoursPrompt);
}
else{
	wage = wageCalc(payPrompt, hoursPrompt);
}
/*if (hoursPrompt > 40)
{
	let hoursOT = hoursPrompt - 40;
	let payOT = payPrompt * 1.5;
	wage = ((40 * payPrompt) + (hoursOT * payOT));
	console.log("Hourly wage: $" + payPrompt);
	console.log("Hours worked: " + hoursPrompt);
	console.log("Hours worked OT: " + hoursOT)
}
else
{
	wage = (hoursPrompt * payPrompt);
	console.log("Hourly wage: $" + payPrompt);
	console.log("Hours worked: " + hoursPrompt);
}*/
function wageCalc(payPerHour, hours) {
	let wageFunction;
	wageFunction = (hours * payPerHour);	
	return wageFunction;
}
function wageCalcOT(payPerHour, hours){
	let wageFunction;
	wageFunction = ((hours - 40)*(payPerHour*1.5)) + (40 * payPerHour);
	return wageFunction;
}
/*<hoursPrompt = parseFloat(hoursPrompt);*/
console.log("Weekly wage: $" + wage);
/*
let wage = (payPrompt * hoursPrompt);
console.log("Pay: $" + wage);
wage = wage.toFixed(2);
console.log("Pay Rounded: $" + wage);
let tax;
if (wage <= 800)
{
console.log("Tax bracket: <= $800/week");
tax = (wage * .125);
}
else
{
console.log("Tax bracket: > $800/week");
tax = (wage * .175);
}
let taxFixed = tax.toFixed(2);
let wageAfterTax = (wage - taxFixed);
wageAfterTax = wageAfterTax.toFixed(2);
console.log("Taxes: $" + taxFixed);
console.log("Pay After Taxes: $" + wageAfterTax);
alert("Pay After Taxes: $" + wageAfterTax);*/
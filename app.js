"use strict";
let payPrompt = prompt("Please enter your pay per hour", 0);
let hoursPrompt = prompt("Please enter hours");
hoursPrompt = parseFloat(hoursPrompt);
console.log("Hourly wage: $" + payPrompt);
console.log("Hours worked: " + hoursPrompt);
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
alert("Pay After Taxes: $" + wageAfterTax);
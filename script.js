const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals =[ 
{
	roman: "M",
	value: 1000
}, 
{
	roman: "D",
	value: 500
}, 
{
	roman: "C",
	value: 100
}, 
{
	roman: "L",
	value: 50
}, 
{
	roman: "X",
	value: 10
}, 
{
	roman: "V",
	value: 5
}, 
{
	roman: "I",
	value: 1
}
]

const numberToRomanNumeral = (input) => {
	const array = input.split(input).reverse();
	
}

console.log(2 * "m");

const checkUserInput = () => {
	const num = Number(numberInput.value);
	
	if (!num || isNaN(num) || !Number.isInteger(num)) {
		output.classList.toggle("hide");
		output.textContent = "Please enter a valid number";
		return; 
	} else if (num >= 4000) {
		output.classList.toggle("hide");
		output.textContent = "Please enter a number less than or equal to 3999";
		return; 
	} else if (num <= 0) {
		output.classList.toggle("hide");
		output.textContent = "Please enter a number greater than or equal to 1";
		return; 
	} 
	
}

convertBtn.addEventListener("click", checkUserInput);
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [ 
{
	roman: "M",
	value: 1000
}, 
{
	roman: "CM",
	value: 900
}, 
{
	roman: "D",
	value: 500
}, 
{
	roman: "CD",
	value: 400
}, 
{
	roman: "C",
	value: 100
}, 
{
	roman: "XC",
	value: 90
}, 
{
	roman: "L",
	value: 50
}, 
{
	roman: "XL",
	value: 40
}, 
{
	roman: "X",
	value: 10
}, 
{
	roman: "IX",
	value: 9
}, 
{
	roman: "V",
	value: 5
}, 
{
	roman: "IV",
	value: 4
}, 
{
	roman: "I",
	value: 1
}
];


const numberToRomanNumeral = (input) => {
	if (input === 0) {
		return "";
	}
	
	for (let i = 0; i < romanNumerals.length; i++) {
		if(input >= romanNumerals[i].value) {
			return romanNumerals[i].roman + numberToRomanNumeral(input - romanNumerals[i].value);
		}
	} 
}

console.log(numberToRomanNumeral(4));


const checkUserInput = () => {
	const num = Number(numberInput.value);
	
	if (!num || isNaN(num) || !Number.isInteger(num)) {
		output.classList.toggle("hide");
		output.classList.toggle("invalid");
		output.textContent = "Please enter a valid number";
		return; 
	} else if (num >= 4000) {
		output.classList.toggle("hide");
		output.classList.toggle("invalid");
		output.textContent = "Please enter a number less than or equal to 3999";
		return; 
	} else if (num <= 0) {
		output.classList.toggle("hide");
		output.classList.toggle("invalid");
		output.textContent = "Please enter a number greater than or equal to 1";
		return; 
	} else {
		return true
	}
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
}
); 
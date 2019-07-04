function getValue(buttonValue) {
  console.log("Hello world!");
  document.getElementById("inputwindow").value += buttonValue;
}

function clearInput(clearInput) {
	document.getElementById('inputwindow').value = clearInput;
}

function calculateResult() {
	let result = eval(document.getElementById('inputwindow').value);
	document.getElementById('displaywindow').value = result;
}

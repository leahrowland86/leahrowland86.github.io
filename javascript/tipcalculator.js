function billCalcAmount() {
//associate the bill amount entered by the user with billAmount variable
  let billAmount = Number(document.getElementById("billamount").value);

//print entered bill amount with a dollar sign underneath the input box
  document.getElementById("bill").innerHTML = "$" + billAmount + " + ";

  return billAmount;
}

function tipCalcAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);

  document.getElementById("tip").innerHTML = "$" + tipAmount + " = ";

  return tipAmount;
}

function totalCalcAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);
  let totalAmount = (billAmount + tipAmount);

  document.getElementById("total").innerHTML = "$" + totalAmount;

  return totalAmount;
}

function otherTipCalcPercentAmount() {
  debugger;
  let billAmount = Number(document.getElementById("billamount").value);
  let tipTypePercent = document.getElementById("othertipamountpercent").checked;
  let tipAmountPercent = Number(document.getElementById("tipamountpercent").value);
  let tipPercent = ((tipAmountPercent / 100) * billAmount);
  let totalAmount = (billAmount + tipPercent);

  if (document.getElementById("othertipamountpercent").checked) {
    document.getElementById("tipamountpercentdiv").style.display = 'block';
  }
  else document.getElementById("tipamountpercentdiv").style.display = 'none';

  if (tipTypePercent.checked = true) {
  document.getElementById("othertip1").innerHTML = "$" + tipPercent + " = ";
  } ""

  document.getElementById("totalpercent").innerHTML = "$" + totalAmount;

  return totalAmount;
}


function otherTipCalcDollarAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipTypeDollar = document.getElementById("othertipamountdollar").checked;
  let tipAmountDollar = Number(document.getElementById("tipamountdollar").value);
  let totalAmount = (tipAmountDollar + billAmount);

  if (document.getElementById("othertipamountdollar").checked) {
    document.getElementById("tipamountdollardiv").style.display = 'block';
  }
  else document.getElementById("tipamountdollardiv").style.display = 'none';

  if (tipTypeDollar.checked = true) {
  document.getElementById("othertip2").innerHTML = "$" + tipAmountDollar  + " = ";
  } ""

  document.getElementById("totaldollar").innerHTML = "$" + totalAmount;

  return totalAmount;
}

//listen for the user's bill amount and output it automatically and CALLS the function
let billInput = document.querySelector("#billamount");
let totalInput = document.querySelector("#total");
billInput.addEventListener('input', function() {
  billCalcAmount();
  totalCalcAmount();
  tipCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

let tipInput = document.querySelector("#tippercentage");
tipInput.addEventListener('input', function() {
  tipCalcAmount();
  billCalcAmount();
  totalCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

let otherPercentTipInput = document.querySelector("#tipamountpercent");
otherPercentTipInput.addEventListener('input', function() {
  tipCalcAmount();
  billCalcAmount();
  totalCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

let otherDollarTipInput = document.querySelector("#tipamountdollar");
otherDollarTipInput.addEventListener('input', function() {
  tipCalcAmount();
  billCalcAmount();
  totalCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

let percentTipInput = document.querySelector("#othertipamountpercent");
percentTipInput.addEventListener('input', function() {
  tipCalcAmount();
  billCalcAmount();
  totalCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

let dollarTipInput = document.querySelector("#othertipamountdollar");
percentTipInput.addEventListener('input', function() {
  tipCalcAmount();
  billCalcAmount();
  totalCalcAmount();
  otherTipCalcPercentAmount();
  otherTipCalcDollarAmount();
});

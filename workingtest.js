function billAmount() {
//associate the bill amount entered by the user with billAmount variable
  let billAmount = Number(document.getElementById("billamount").value);

//print entered bill amount with a dollar sign underneath the input box
  document.getElementById("bill").innerHTML = "$" + billAmount + " + ";

  return billAmount;
};

function tipAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);
  // let totalAmount = (billAmount + tipAmount);

  document.getElementById("tip").innerHTML = "$" + tipAmount + " = ";
  // document.getElementById("total").innerHTML = "$" + totalAmount + " @@@ ";

  return tipAmount;
};

function totalAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);
  let totalAmount = (billAmount + tipAmount);

  // document.getElementById("tip").innerHTML = "$" + tipAmount + " = ";
  document.getElementById("total").innerHTML = "$" + totalAmount + " %%% ";

  return totalAmount;
};


//listen for the user's bill amount and output it automatically
let billInput = document.querySelector("#billamount");
billInput.addEventListener('input', function() {
  billAmount();
});

let tipInput = document.querySelector("#tippercentage");
tipInput.addEventListener('input', function() {
  tipAmount();
});

let totalInput = document.querySelector("#totalDue");
totalInput.addEventListener('input', function() {
  totalAmount();
});

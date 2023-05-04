"use strict";

window.onload = function () {
  const getIceCreamBtnEl = document.getElementById("getIceCream");
  getIceCreamBtnEl.onclick = onGetIceCreamBtnClick;
};

window.onload = function () {
  let hideToppingsEl = document.getElementById("coneSize");
  hideToppingsEl.onclick = onHideOrShowToppingsDiv;
};

function onHideOrShowToppingsDiv() {
  let hideToppingsEl = document.getElementById("coneSize");
  let toppingsOptnEl = document.getElementById("toppingsOptn");

  if ("coneSize".checked) {
    document.getElementById("toppingsOptn").style.display = "none";
  } else {
    toppingsOptn.style.display = "block";
  }
}

function onGetIceCreamBtnClick() {
  //inputs
  const scoopNumEl = +document.getElementById("scoopNum").value;
  const pricePerScoop = 1.25;

  //calc
  const extraToppings = document.querySelectorAll("input:checked");

  let extraCharge = 0;
  if (document.getElementById("sprinklesTop").checked) {
    extraCharge += 0.5;
  }
  if (document.getElementById("whippedTop").checked) {
    extraCharge += 0.25;
  }
  if (document.getElementById("fudgeTop").checked) {
    extraCharge += 1.25;
  }
  if (document.getElementById("cherryTop").checked) {
    extraCharge += 0.25;
  }

  //outputs
  const toppingPriceEl = document.getElementById("toppingPrice");
  toppingPriceEl.innerHTML = `Toppings price: $${extraCharge.toFixed(2)}`;

  /*const basePriceEl = document.getElementById('basePrice');
    basePriceEl.innerHTML = `Base price: $${}`;

    const salesTaxEl = document.getElementById('salesTax');
    salesTaxEl.innerHTML = `Tax: $${}`

    const totalDueEl = document.getElementById('totalDue');
    totalDueEl.innerHTML = `Total Due: $${}`;*/
}

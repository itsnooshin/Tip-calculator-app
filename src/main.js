'use strict';
const bill = document.querySelector('.bill__number');
const numel = document.querySelector('.people__number');
const total = document.querySelector('.total-amount');
const tipPer = document.querySelectorAll('.btn-tip');
const tipAmount = document.querySelector('.tip-amount');
const tipnum = document.querySelectorAll('.tip-but');
const btnReset = document.querySelector('.btn-end-reset');
const prevDiv1 = document.querySelector('.prevDivIocn');

let prevDiv = null;
const numBill = function () {
  let num = Number(bill.value);
};
const numpeople = function () {
  let num1 = Number(numel.value);
  calcuate();
};
bill.addEventListener('input', numBill);
numel.addEventListener('input', numpeople);

tipPer.forEach(function (numBtn) {
  numBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (numBtn === e.target) {
      if (prevDiv) {
        prevDiv.style.backgroundColor = '';
        prevDiv.style.color = '#ffff';
      }
      numBtn.style.backgroundColor = '#26C2AE';
      numBtn.style.color = '#00474B';
      prevDiv = numBtn;
      let btnNumi = parseInt(numBtn.textContent);
      selectNumber = btnNumi;
    }
    calcuate();
  });
});

let selectNumber = null;
// calcuate the total and the tip amount
const calcuate = function () {
  const first = Number(bill.value);
  const second = Number(numel.value);
  const tip = selectNumber;
  const tipAmount1 = parseFloat((first * tip) / 100);
  const er = parseFloat(tipAmount1 / second);
  const amount = er.toFixed(2);
  let totalamount = parseFloat(((first + tipAmount1) / second).toFixed(2));
  if (totalamount !== Infinity && amount !== Infinity) {
    total.textContent = totalamount;
    tipAmount.textContent = amount;
  }
};

// reset button
btnReset.addEventListener('click', function () {
  bill.value = '';
  numel.value = '';
  total.textContent = '0.00';
  tipAmount.textContent = '0.00';
  prevDiv.style.backgroundColor = '';
  prevDiv.style.color = '#ffff';
});

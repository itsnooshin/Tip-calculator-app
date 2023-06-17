'use strict';
const bill = document.querySelector('.bill__number');
const numel = document.querySelector('.people__number');
const total = document.querySelector('.total-amount');
const tipPer = document.querySelectorAll('.btn-tip');
const tipAmount = document.querySelector('.tip-amount');
const tipnum = document.querySelectorAll('.tip-but');
const btnReset = document.querySelectorAll('.btn-end-reset');

let prevDiv = null;
const numBill = function () {
  let num = Number(bill.value);
};
const numpeople = function () {
  let num1 = Number(numel.value);
  calcuate();
};
let selectNumber = null;
const btn = function (numBtn) {
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
  });
};

const calcuate = function (e) {
  const first = Number(bill.value);
  const second = Number(numel.value);
  const tip = selectNumber;
  const tipAmount1 = (first * tip) / 100;
  const er = tipAmount1 / second;
  const amount = er;
  let totalamount = ((first + tipAmount1) / second).toFixed(2);

  total.textContent = totalamount;
  tipAmount.textContent = amount;
};

const sum = function () {
  tipPer.forEach(function (num) {
    btn(num);
  });
};
bill.addEventListener('input', numBill);
numel.addEventListener('input', numpeople);



sum();

'use strict';
const billDollar = document.querySelector('.bill__number');
const numberOfPeoople = document.querySelector('.people__number');
const totalOfEachPerson = document.querySelector('.total-amount');
const BtnTipPercentage = document.querySelectorAll('.btn-tip');
const tipAmountEachPerson = document.querySelector('.tip-amount');
const btnReset = document.querySelector('.btn-end-reset');
const btnCostum = document.querySelector('.btn-custom');
let selectNumber = null;
let prevDiv = null;
const numBill = function () {
  let num = Number(billDollar.value);
};
const numpeople = function () {
  let num1 = Number(numberOfPeoople.value);
  dom();
  calcuate();
};
// eventlistener
billDollar.addEventListener('input', numBill);
numberOfPeoople.addEventListener('input', numpeople);

function btnel() {
  BtnTipPercentage.forEach(function (numBtn) {
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
        const btnNumi = parseInt(numBtn.textContent);
        console.log(btnNumi);
        selectNumber = btnNumi;
        console.log(selectNumber);
        dom();
        calcuate();
      }
    });
  });

  btnCostum.addEventListener('input', function () {
    selectNumber = Number(btnCostum.value);
  });
  btnCostum.addEventListener('click', function () {
    dom();
  });
}

const calcuate = function () {
  const bill = Number(billDollar.value);
  const people = Number(numberOfPeoople.value);
  const tip = selectNumber;
  const getTipAmount = (bill * tip) / 100;
  const getTipPerson = parseFloat(getTipAmount / people).toFixed(2);
  let totalamount = parseFloat(((bill + getTipAmount) / people).toFixed(2));
  if (totalamount !== Infinity && getTipPerson !== Infinity) {
    totalOfEachPerson.textContent = totalamount;
    tipAmountEachPerson.textContent = getTipPerson;
  }
};
btnel();

btnReset.addEventListener('click', function () {
  billDollar.value = '';
  numberOfPeoople.value = '';
  totalOfEachPerson.textContent = '0.00';
  tipAmountEachPerson.textContent = '0.00';
  prevDiv.style.backgroundColor = '';
  prevDiv.style.color = '#ffff';
  btnCostum.value = '';
});

const dom = function () {
  const second = Number(numberOfPeoople.value);
  if (!second) {
    numberOfPeoople.style.border = '2px solid #E17052';
    let newP = document.createElement('p');
    newP.textContent = "can't be zero ";
    newP.classList.add('main-error-message');
    let elt = document.querySelector('.main__container-Num__title');
    elt.insertAdjacentElement('afterend', newP);
  } else if (second === Number(numberOfPeoople.value)) {
    numberOfPeoople.style.border = 'none';
    let err = document.querySelector('.main-error-message');
    if (err) {
      err.remove();
    }
  }
};



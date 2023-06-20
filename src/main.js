'use strict';

const billDollar = document.querySelector('.conatiner__form-input-bill');
const numberOfPeoople = document.querySelector('.conatiner__form-input-people');
const totalOfEachPerson = document.querySelector('.total-amount-el');
const tipAmountEachPerson = document.querySelector('.tip-amount-el');
const BtnTipPercentage = document.querySelectorAll('.btn-tip');
const btnReset = document.querySelector('.container__right-btn');
const btnCostum = document.querySelector('.btn-custom');
let selectNumber = null;
let prevDiv = null;
let clicked = true;
const numBill = function () {
  let num = Number(billDollar.value);
};
const numpeople = function () {
  let num1 = Number(numberOfPeoople.value);
  dom();
  calcuate();
  btnReset.style.backgroundColor = '#9FE8DF';
  reset();
  timeout();
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
          // dom();
        }
        numBtn.style.backgroundColor = '#26C2AE';
        numBtn.style.color = '#00474B';
        prevDiv = numBtn;
        const btnNumi = parseInt(numBtn.textContent);
        console.log(btnNumi);
        selectNumber = btnNumi;

        dom();
        calcuate();
      }
    });
  });

  btnCostum.addEventListener('input', function () {
    selectNumber = Number(btnCostum.value);
    dom();
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
    console.log(totalOfEachPerson.textContent);
    tipAmountEachPerson.textContent = getTipPerson;
  }
};
btnel();

const timeout = function () {
  setTimeout(() => {
    billDollar.value = '';
    numberOfPeoople.value = '';
    btnCostum.value = '';
    totalOfEachPerson.textContent = '0.00';
    tipAmountEachPerson.textContent = '0.00';
      prevDiv.style.backgroundColor = '';
      prevDiv.style.color = '#ffff';
      btnReset.style.backgroundColor = '#0D686D';
    
  }, 2000);
};

const reset = function () {
  btnReset.addEventListener('click', function () {
    billDollar.value = '';
    numberOfPeoople.value = '';
    totalOfEachPerson.textContent = '0.00';
    tipAmountEachPerson.textContent = '0.00';
    prevDiv.style.backgroundColor = '';
    prevDiv.style.color = '#ffff';
    btnCostum.value = '';
  });
};

const dom = function () {
  let second = Number(numberOfPeoople.value);
  let err = document.querySelector('.main-error-message');
  if (!second) {
    numberOfPeoople.style.border = '2px solid #E17052';
    if (!err) {
      let newP = document.createElement('p');
      newP.textContent = "can't be zero ";
      newP.classList.add('main-error-message');
      let elt = document.querySelector('.conatiner__left-title-Num');
      elt.insertAdjacentElement('afterend', newP);
    }
  } else if (second) {
    numberOfPeoople.style.border = 'none';
    if (err) {
      err.remove();
    }
  }
};

'use strict';
const bill = document.querySelector('.bill__number');
const numel = document.querySelector('.people__number');
const total = document.querySelector('.total-amount');
const tipPer = document.querySelectorAll('.btn-tip');
const tipAmount = document.querySelector('.tip-amount');
const tipnum = document.querySelectorAll('.tip-but');
const btnReset = document.querySelector('.btn-end-reset');
const prevDiv1 = document.querySelector('.prevDivIocn');
const btnCostum = document.querySelector('.btn-custom');
let selectNumber = null;
let prevDiv = null;
const numBill = function () {
  let num = Number(bill.value);
};
const numpeople = function () {
  let num1 = Number(numel.value);
  dom();
  calcuate();
};
// eventlistener
bill.addEventListener('input', numBill);
numel.addEventListener('input', numpeople);

function btnel() {
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
}

const calcuate = function () {
  const first = Number(bill.value);
  const second = Number(numel.value);
  const tip = selectNumber;
  const tipAmount3 = (first * tip) / 100;
  const er56 = parseFloat(tipAmount3 / second).toFixed(2);
  let totalamount = parseFloat(((first + tipAmount3) / second).toFixed(2));
  total.textContent = totalamount;
  tipAmount.textContent = er56;
};
btnel();

btnReset.addEventListener('click', function () {
  bill.value = '';
  numel.value = '';
  total.textContent = '0.00';
  tipAmount.textContent = '0.00';
  prevDiv.style.backgroundColor = '';
  prevDiv.style.color = '#ffff';
});

const dom = function () {
  const second = Number(numel.value);

  if (!second) {
    numel.style.border = '2px solid #E17052';
    let newP = document.createElement('p');
    newP.textContent = "can't be zero ";
    newP.classList.add('main-error-message');
    let elt = document.querySelector('.main__container-Num__title');
    elt.insertAdjacentElement('afterend', newP);
  } else if (second === Number(numel.value)) {
    numel.style.border = 'none';
    let err = document.querySelector('.main-error-message');
    if (err) {
      err.remove();
    }
  }
};

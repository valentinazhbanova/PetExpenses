const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonBill = document.querySelector('#addTip');
buttonBill.addEventListener('click', showBill);

function showBill(e) {
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e){
    e.preventDefault();
    const amount = document.querySelector('.amount').value;
    const people = document.querySelector('.people').value;
    const tip = document.querySelector('#tip').value;

    if(amount === '' || people === '' || people < 1) {
        Swal.fire(
            'Нет данных',
            'Введите информацию!',
            'question'
        )
    }

    let amountPerPerson = amount / people;
    let billPerPerson = (amount * tip) / people;
    let totalSum = amountPerPerson + billPerPerson; 

    amountPerPerson = amountPerPerson.toFixed(2);
    billPerPerson = billPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson;
    document.querySelector('#dividedTip').textContent = billPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}
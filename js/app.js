'use strict'
const API_URL = 'http://localhost:9999/api';
const showAccount = (parentEl, data, err) => {
    if (err) {
        parentEl.innerHTML = `
            <div>Произошла ошибка....</div>
        `;
        return;
    }
    console.log(data.account.name);
    parentEl.querySelectorAll('.name')[0].innerHTML = data.account.name;
    parentEl.querySelectorAll('.number')[0].innerHTML = data.account.number;
    parentEl.querySelectorAll('.amount')[0].innerHTML = data.account.amount.toFixed(2);


}
//TODO:рубль в html
const loadAccount = async (el) => {
    try {
        const response = await fetch(`${API_URL}/hw15`);
        console.log(response);
        console.log(response.ok);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        showAccount(el, data);
    } catch (e) {
        console.error(e);
        showAccount(el, null, e);
    }
};
const accountsAndCardsEl = document.getElementById('accounts-and-cards');
loadAccount(accountsAndCardsEl);
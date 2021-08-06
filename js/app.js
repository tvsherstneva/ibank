'use strict';
const API_URL = 'http://localhost:9999/api';
const showAccount = (parentEl, data, err) => {
    if (err) {
        parentEl.innerHTML = `
            <div>Произошла ошибка....</div>
        `;
        return;
    }
    let amount = data.account.amount.toFixed(2);
    amount = String(amount);
    amount = amount.replace('.',',');
    parentEl.innerHTML = `   
     <div class="info">
            <div class="name">${data.account.name}</div>
            <div class="number">${data.account.number}</div>
            <div class="balance">
                <span class="amount">${amount}</span> ₽
            </div>
        </div>
    `;
};

const showLoader = (parentEl) => {
    parentEl.innerHTML = `
                        <div class="loading-indicator"></div>
                    `;
};

const loadAccount = async (el) => {
    try {
        showLoader(el);
        const response = await fetch(`${API_URL}/hw15`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        showAccount(el, data);
    } catch (e) {
        showAccount(el, null, e);
    }
};
const accountsAndCardsEl = document.getElementById('accounts-and-cards');
loadAccount(accountsAndCardsEl);
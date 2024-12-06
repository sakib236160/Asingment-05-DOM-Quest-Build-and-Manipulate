function handleDonation(cardIndex) {
    const donationInput = document.getElementById(`donation-input-${cardIndex}`);
    const donationCoin = document.getElementById(`donation-coin-${cardIndex}`);
    const donationAmount = document.getElementById('donation-amount');

    const donationInputValue = parseFloat(donationInput.value) || 0;
    const donationCoinValue = parseFloat(donationCoin.innerText) || 0;
    const donationAmountValue = parseFloat(donationAmount.innerText) || 0;


    if (donationInputValue <= 0 || isNaN(donationInputValue)) {
        alert(`Card ${cardIndex}: Please enter a valid donation amount greater than 0.`);
    } else if (donationInputValue > donationAmountValue) {
        alert(`Card ${cardIndex}: Your input amount exceeds the available donation amount!`);
    } else {
        const totalCoin = (donationCoinValue + donationInputValue).toFixed(2);
        donationCoin.innerText = totalCoin;
    
        const totalDonationAmount = (donationAmountValue - donationInputValue).toFixed(2);
        donationAmount.innerText = totalDonationAmount;
    
        alert(`Card ${cardIndex}: Successfully added ${donationInputValue} BDT to your donation.`);
    }
    

    if (donationInputValue <= 0 || isNaN(donationInputValue)) {
        alert(`Card ${cardIndex}: Please enter a valid donation amount greater than 0.`);
        return; 
    }
    const historyItem = document.createElement('div');
    historyItem.className = 'card bg-base-100 mx-10 my-0';
    historyItem.innerHTML = `
        <div class="card-body">
            <h2 class="card-title font-bold">
              ${donationInputValue} Taka is Donated for Card ${cardIndex}
            </h2>
            <p class="text-sm text-gray-500">
              Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)
            </p>
        </div>
    `;
    
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    donationInput.value = '';
}

    const historyTab = document.getElementById('history-tab');
    const donationTab = document.getElementById('donation-tab');
    historyTab.addEventListener('click', function () {
        historyTab.classList.add('bg-primary'); 
        donationTab.classList.remove('bg-primary')

        document.getElementById('card-section-all').classList.add('hidden');
        document.getElementById('history-list').classList.remove('hidden');
    });

    donationTab.addEventListener('click',function(){
        donationTab.classList.add('bg-primary');
        historyTab.classList.remove('bg-primary');

        document.getElementById('card-section-all').classList.remove('hidden');
        document.getElementById('history-list').classList.add('hidden');
    })

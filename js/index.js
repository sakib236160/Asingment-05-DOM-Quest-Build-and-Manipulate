function handleDonation(cardIndex) {
    // Fetch elements dynamically based on cardIndex
    const donationInput = document.getElementById(`donation-input-${cardIndex}`);
    const donationCoin = document.getElementById(`donation-coin-${cardIndex}`);
    const donationAmount = document.getElementById('donation-amount');

    // Parse values
    const donationInputValue = parseFloat(donationInput.value) || 0;
    const donationCoinValue = parseFloat(donationCoin.innerText) || 0;
    const donationAmountValue = parseFloat(donationAmount.innerText) || 0;

    let alertMessage = "";

    // Validation logic
    if (donationInputValue <= 0 || isNaN(donationInputValue)) {
        alertMessage = `Card ${cardIndex}: Please enter a valid number greater than 0.`;
    } else if (donationInputValue > donationAmountValue) {
        alertMessage = `Card ${cardIndex}: Donation amount cannot exceed ${donationAmountValue} BDT.`;
    } else {
        // Valid case: Perform donation
        const totalCoin = (donationCoinValue + donationInputValue).toFixed(2);
        donationCoin.innerText = totalCoin;

        const totalDonationAmount = (donationAmountValue - donationInputValue).toFixed(2);
        donationAmount.innerText = totalDonationAmount;

        alertMessage = `Card ${cardIndex}: Successfully added ${donationInputValue} BDT to your donation.`;

        // Get dynamic text for the specific card's heading
        const dynamicText = document.getElementById(`h2-card${cardIndex}`).innerText;

        // Create a new history card
        const historyItem = document.createElement('div');
        historyItem.className = 'card bg-base-100 mx-10 my-0';
        historyItem.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold">
                  ${donationInputValue} Taka is Donated for: ${dynamicText}
                </h2>
                <p class="text-sm text-gray-500">
                  Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)
                </p>
            </div>
        `;

        // Append the new history card to the history container
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        // Ensure the history section is visible
        historyContainer.classList.remove('hidden');
        historyContainer.classList.add('hidden');
    }

    // Always display the alert
    alert(alertMessage);

    // Clear the input field
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

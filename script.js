const offerOptions = document.querySelectorAll('.offer-option');

offerOptions.forEach(option => {
    option.addEventListener('click', function() {
        offerOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input[type="radio"]').checked = true;
        updateTotal();
    });
});

function updateTotal() {
    const selectedValue = document.querySelector('input[name="bogo"]:checked').value;
    document.getElementById('total').textContent = `$${selectedValue}.00 USD`;
}

updateTotal();

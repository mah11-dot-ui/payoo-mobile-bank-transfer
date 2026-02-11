document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const AddMoneyInput = document.getElementById('input-add-money').value;
    console.log('Amount:' + AddMoneyInput);

    const PinNumberInput = document.getElementById('pin-number').value;
    console.log('Pin Number:' + PinNumberInput);
    
    
})

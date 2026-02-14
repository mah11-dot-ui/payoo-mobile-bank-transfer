document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    const AddMoneyInput = document.getElementById('input-add-money').value;
    console.log('Amount:' + AddMoneyInput);

    const PinNumberInput = document.getElementById('pin-number').value;
    console.log('Pin Number:' + typeof PinNumberInput);
    

    if(PinNumberInput === '1234'){
        console.log("added money to your acount");

        const balance = document.getElementById('balance').innerHTML;
        console.log("Balnce:" + typeof balance);
        
        const addmoneyNumber = parseFloat(AddMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalnce = addmoneyNumber + balanceNumber;
        console.log("New Balance:" + newBalnce);

        document.getElementById('balance').innerHTML = newBalnce;
        
        
    }else{
        alert("Wrong Pin Number");
    }
})

// console.log('Hello World' + '!');

document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault();


    const PhoneNumber = document.getElementById('phone-number').value;
    console.log('Phone Number: ' + PhoneNumber);
    const PinNumber = document.getElementById('pin-number').value;
    console.log('Pin Number: ' + PinNumber);


    if(PhoneNumber === '01716157704' && PinNumber === '1234'){
        console.log('Login successful!');
        window.location.href = '/home.html';
    }else{
        alert('Invalid phone number or pin. Please try again.');
    }

    
})

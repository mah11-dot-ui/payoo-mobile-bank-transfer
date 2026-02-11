// console.log('Hello World' + '!');

document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault();
    console.log('login button clicked');


    const PhoneNumber = document.getElementById('phone-number').value;
    console.log('Phone Number: ' + PhoneNumber);

    
})

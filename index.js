const form = document.getElementById('form');
const h2 = document.querySelector('.contact h2');

function display(e) {
    e.preventDefault();
    const fName = document.getElementById('fName');
    const lName = document.getElementById('lName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const display = document.querySelector('.display-form');

    form.style.display = 'none';

    h2.innerHTML = `<h2>Thank you for your Message!</h2>`;

    display.innerHTML = `
        <h3>First Name: ${fName.value}</h3>
        <h3>Last Name: ${lName.value}</h3>
        <h3>Email Address: ${email.value}</h3>
        <h3>Message: ${message.value}</h3>`

        const headings = display.querySelectorAll('h3');

        headings.forEach(h3 => {
        h3.style.fontSize = '24px';
        h3.style.fontFamily = 'cursive'
        h3.style.margin = '12px 0';
        });
}


form.addEventListener('submit', display)
const colors = ['#B2D1B7', '#B2D1D0', '#D1C9B2', '#D1B2B2', '#E2EAF4']
const form = document.getElementById('contactform')

function change_background() {
    var portfolio = document.getElementById('portfoliorow')
    portfolio.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
};

Array.prototype.forEach.call(
    document.querySelectorAll('[id^=card_id]'), function(e) {
        e.addEventListener('click', change_background);
});

form.onsubmit = function(event) {
    form.reset();
    alert('Your contact form has been sent.')
};

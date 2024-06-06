const slidein = document.querySelector('.slidein');
const ham = document.querySelector('.ham');
const exit = document.querySelector('.exit');


ham.addEventListener('click', () => {
    slidein.classList.add('active');
});


exit.addEventListener('click', () => {
    slidein.classList.remove('active');
});


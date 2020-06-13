console.log("WARSZTAT - Ustaw tło elementów HTML");

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    
    p1.classList.toggle('bg-Red');
    p2.classList.toggle('bg-Yellow');
    //powinnismy uzyc metody toggle, zamiast metody add badz ustawic za pomoca style

   /*  p1.style.backgroundColor = 'red'; //nie przez inline
    p2.style.backgroundColor = 'yellow'; */


}
let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);
